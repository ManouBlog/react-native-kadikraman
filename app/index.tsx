import { Text, View,TouchableOpacity,
   Alert ,
   StyleSheet,
   TextInput, 
   FlatList, 
   Pressable,
   LayoutAnimation} from "react-native";
import Antdesign from "@expo/vector-icons/AntDesign";
import { useState,useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { getFromStorage,saveToStorage } from "@/utils/storage";
const storageKey = "shoList";
import * as Haptics from "expo-haptics";

export default function Index() {

  type ShopItem = {
    id:string,
    name:string,
    completeAtTimestamp?:number,
    lastUpdatedTimestamp:number
  }
  const initialList:ShopItem[] = []
  const [value,setValue] = useState("");
  const [shopList,setShopList] = useState<ShopItem[]>(initialList);

  useEffect(() => {
    const fetchInital = async()=>{
      const data = await getFromStorage(storageKey);
      if(data){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShopList(data);
      }
    }
    fetchInital();
  }, [])

  const handleSubmit = ()=>{
    if(value){
      const newShoplist = [
        {id:new Date().toTimeString(),name:value,lastUpdatedTimestamp:Date.now()},
        ...shopList,
      ]
      saveToStorage(storageKey,newShoplist);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
      setShopList(newShoplist);
      
      setValue("")
    }
  }

  const handleUpdate = (id:string)=>{
  const newShopList = shopList.map((item)=>{
    if(item.id === id){
      if(item.completeAtTimestamp){
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
      }else{
         Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      }
      return {
        ...item,
        completeAtTimestamp:item.completeAtTimestamp ? undefined:Date.now()
      }
    }
    return item;
  })
  saveToStorage(storageKey,newShopList);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  setShopList(newShopList)
  
  }
  const handleDelete = (id:string)=>{
   const newItemShop = shopList.filter(item=>item.id !== id)
      saveToStorage(storageKey,newItemShop);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
   setShopList(newItemShop)

  }

  function orderShoppingList(shoppingList: ShopItem[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completeAtTimestamp && item2.completeAtTimestamp) {
      return item2.completeAtTimestamp - item1.completeAtTimestamp;
    }

    if (item1.completeAtTimestamp && !item2.completeAtTimestamp) {
      return 1;
    }

    if (!item1.completeAtTimestamp && item2.completeAtTimestamp) {
      return -1;
    }

    if (!item1.completeAtTimestamp && !item2.completeAtTimestamp) {
      return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
    }

    return 0;
  });
}

  const deleteFnc =(id:string)=>{
    Alert.alert(
      'are you want to delete this ?',
      'cela va supprimer',
    [{
      text:"YES",
      onPress:()=>handleDelete(id),
      style:"destructive"
    },{
      text:"CANCEL",
      style:"cancel"
    }]
    )
  } 

  
  return (
    <FlatList 
     data={orderShoppingList(shopList)}
    style={{
        flex: 1,
        backgroundColor:"white",
        padding:12
      }}
      stickyHeaderIndices={[0]}
      contentContainerStyle={{
        paddingBottom:12
      }}
      ListEmptyComponent={
        <View style={{padding:12}}>
          <Text>Your shopplist is empty</Text>
        </View>
      }
      ListHeaderComponent={
<TextInput placeholder="E.g:Coffee" style={styles.textInputStyle}
      onChangeText={(val)=>setValue(val)}
      value={value}
      keyboardType="email-address"
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      />
      }
     renderItem={({item})=>(
<Pressable
 onPress={()=>handleUpdate(item.id)}
style={{
  flex:1,
        borderBottomColor:"red",
        borderBottomWidth:2,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: item.completeAtTimestamp ? "gray":undefined
        }}>
          <View style={{flexDirection:"row",gap:8,flex:1}}>
            <Entypo name={item.completeAtTimestamp? "check":"circle"} 
            size={24} color={item.completeAtTimestamp ? "green":"gray"} />
        <Text 
        numberOfLines={1}
        style={{
        fontSize:18,
        textDecorationLine: item.completeAtTimestamp ? "line-through":undefined,
        flex:1,
        }}>{item.name}</Text> 
          </View>
      <TouchableOpacity style={{margin:12}} onPress={()=>deleteFnc(item.id)}>
         <Antdesign name="close-circle" size={24} color={'red'} />
        </TouchableOpacity>
      </Pressable>
     )}
    />
  );
}
const styles = StyleSheet.create({
  textInputStyle:{
    borderWidth:2,
    borderColor:"gray",
    borderRadius:50,
    marginBottom:12,
    padding:12,
    marginHorizontal:12,
    backgroundColor:"white"
  }
})
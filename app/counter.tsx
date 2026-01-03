import { Text, View, StyleSheet,TouchableOpacity} from "react-native";
import { registerForPushNotificationsAsync } from "@/utils/registerForPushNotificationsAsync";
export default function CounterScreen() {
   const handleRequestPermission = async()=>{
    const result = await registerForPushNotificationsAsync();
    console.log(result);
   }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{padding:15,backgroundColor:'black',borderRadius:12}}
         activeOpacity={0.8} 
         onPress={()=>handleRequestPermission()}>
            <Text style={styles.text}>Request Permission</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color:"white",
    letterSpacing:1,
    fontWeight:"200",
    textTransform:"uppercase"
  },
});

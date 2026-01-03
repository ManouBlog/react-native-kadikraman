import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function RootLayout() {
  return(
<Tabs screenOptions={{tabBarActiveTintColor:'pink'}}>
  <Tabs.Screen name="index"  options={{title:"shopping",tabBarIcon:({color,size})=>{
    return <Feather name="list" size={size} color={color} />
  }}}/>
  <Tabs.Screen name="counter"  options={{
    title:"my counter"}}/>
  <Tabs.Screen name="idea"  options={{title:"IDEA"}}/>
</Tabs>
  ) 
    ;
}

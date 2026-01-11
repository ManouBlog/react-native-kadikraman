import { Stack,Link } from "expo-router";
import {Pressable} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "index",
};
export default function LayoutHome(){
    return (
        <Stack>
            <Stack.Screen name="index" options={
             {
                title:"Accueil",
                headerRight:()=>{
                   return(
                    <Link href='/modalcreate' asChild>
                    <Pressable style={{marginRight:20}} hitSlop={20}>
                    <AntDesign name="plus-circle" size={24} color='black' />
                    </Pressable>
                    </Link>
                   )
                },
             }
            } />
            <Stack.Screen 
                   name="plants/[plantId]"
       options={{
         title: "",
         headerBackTitle: "",
         headerTintColor:"black",
       }}
            />
        </Stack>
    )
}
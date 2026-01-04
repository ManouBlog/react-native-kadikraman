import { Redirect, Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import {theme} from "@/myTheme"; 
import { useUserStore } from "@/store/userStore";

// import { Text } from "react-native";

export default function Layout(){
    const hasFinishedOnBoarding = useUserStore(state=>state.hasFinished);
    if(!hasFinishedOnBoarding){
        return <Redirect href="/onboarding" />
    }
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:theme.colorGreen}}>
            <Tabs.Screen name="index"
            options={
             {
                // tabBarShowLabel:false,
                title:"Accueil",
                tabBarIcon:({color,size})=> <Entypo name="home" size={size} color={color} />
             }
            }
            />
            <Tabs.Screen name="profile"

            options={
             {
                title:"Profil",
                // tabBarLabel(props) {
                //     if(props.focused){
                //         return <Text>hello</Text>
                //     }
                // },
                // tabBarShowLabel:false,
                tabBarIcon:({color,size})=> <Entypo name="user" size={size} color={color} />
             }
            } />
        </Tabs>
    )
}
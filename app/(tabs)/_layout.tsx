import { Redirect, Tabs} from "expo-router";
import { Entypo } from "@expo/vector-icons";
// import {Pressable} from 'react-native';
import {theme} from "@/myTheme"; 
import { useUserStore } from "@/store/userStore";
// import { AntDesign } from "@expo/vector-icons";


export default function Layout(){
    const hasFinishedOnBoarding = useUserStore(state=>state.hasFinished);
    if(!hasFinishedOnBoarding){
        return <Redirect href="/onboarding" />
    }
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:theme.colorGreen}}>
            <Tabs.Screen name="(home)"
            options={
             {
                // tabBarShowLabel:false,
                title:"Accueil",
                headerShown:false,
                // headerRight:()=>{
                //    return(
                //     <Link href='/modalcreate' asChild>
                //     <Pressable style={{marginRight:20}} hitSlop={20}>
                //     <AntDesign name="plus-circle" size={24} color='black' />
                //     </Pressable>
                //     </Link>
                //    )
                // },
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
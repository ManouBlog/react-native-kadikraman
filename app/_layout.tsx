import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="(tabs)" 
            options={{
                headerShown:false,
                animation:"fade"
            }} />
            <Stack.Screen name="onboarding"
            options={{
                headerShown:false,
                animation:"fade"
            }}
            />
            <Stack.Screen name="modalcreate"
            options={{
                title:"creation",
                presentation:"modal"
            }}
            />
        </Stack>
    )
}
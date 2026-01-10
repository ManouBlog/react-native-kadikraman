import { StyleSheet,View,Text } from "react-native";
import { theme } from "@/myTheme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {ShowImage} from "@/components/ShowImage";


export default function OnboardingScreen() {
  const router = useRouter();
  const handleToggle = useUserStore((state)=>state.toggleHasFinished);
  const toggleOnboarding = ()=>{
    handleToggle();
    router.replace("/");
  }
  return (
    <LinearGradient 
    colors={[theme.colorLeafyGreen,theme.colorLimeGreen]}
    style={styles.container}>
      <StatusBar style="light" />
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:50,color:theme.colorWhite}}>Planty App</Text>
        <Text style={{color:theme.colorWhite}}>Superbe application</Text>
      </View>
      <ShowImage />
      <PlantlyButton title="let me in" onPress={toggleOnboarding} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
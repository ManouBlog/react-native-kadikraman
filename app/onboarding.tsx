import { View, StyleSheet } from "react-native";
import { theme } from "@/myTheme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function OnboardingScreen() {
  const router = useRouter();
  const handleToggle = useUserStore((state)=>state.toggleHasFinished);
  const toggleOnboarding = ()=>{
    handleToggle();
    router.replace("/");
  }
  return (
    <View style={styles.container}>
      <PlantlyButton title="let me in" onPress={toggleOnboarding} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
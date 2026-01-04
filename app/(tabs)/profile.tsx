import { useUserStore } from "@/store/userStore";
import {  View, StyleSheet } from "react-native";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function ProfileScreen() {
  const handleDeconnexion =useUserStore((state)=>state.toggleHasFinished)
  return (
    <View style={styles.container}>   
   <PlantlyButton title="Deconnexion" onPress={handleDeconnexion} />
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

});

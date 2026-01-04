import { useUserStore } from "@/store/userStore";
import {  View, StyleSheet,Button } from "react-native";

export default function ProfileScreen() {
  const handleDeconnexion =useUserStore((state)=>state.toggleHasFinished)
  return (
    <View style={styles.container}>   
   <Button title="Deconnexion" onPress={handleDeconnexion} />
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

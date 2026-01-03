import { Text, View, StyleSheet,TouchableOpacity,Alert} from "react-native";
import { registerForPushNotificationsAsync } from "@/utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications"
export default function CounterScreen() {
   const handleRequestPermission = async()=>{
    const result = await registerForPushNotificationsAsync();
    console.log(result);
   }
   const scheduleNotification = async()=>{
     const result = await registerForPushNotificationsAsync();
        if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "I'm a notification from your app! 📨",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5,
        },
      });
    } else {
      Alert.alert(
        "Unable to schedule notification",
        "Enable the notifications permission for Expo Go in settings",
      );
    }
   }
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={{padding:15,backgroundColor:'black',borderRadius:12}}
         activeOpacity={0.8} 
         onPress={scheduleNotification}
         >
            <Text style={styles.text}>Schedule notification</Text>
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

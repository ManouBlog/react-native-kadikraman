import { Stack, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Pressable } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: () => (
            <Pressable onPress={() => router.navigate("/alarm/history")}>
              <Feather name="clock" size={22} color="#000" />
            </Pressable>
          ),
        }}
      />
      
    </Stack>
  );
}

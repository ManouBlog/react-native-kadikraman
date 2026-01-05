import { FlatList, StyleSheet } from "react-native";
import { theme } from "@/myTheme";
import { usePlantStore } from "@/store/PlantStore";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";
import { PlantCart } from "@/components/PlantCart";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCart plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/modalcreate");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "@/myTheme";
import { PlantType } from "@/store/PlantStore";
import {ShowImage} from "./ShowImage";
import { Link } from "expo-router";

export function PlantCart({ plant }: { plant: PlantType }) {
  return (
        <Link href={{pathname:`plants/${plant.id}`,params:{action:"water"}}} asChild>
      <Pressable style={styles.plantCard}>
        <ShowImage size={100} imageUri={plant.imageUri} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.plantName}>
            {plant.name}
          </Text>
          <Text style={styles.subtitle}>
            Water every {plant.wateringFrequencyDays} days
          </Text>
        </View>
      </Pressable>
    </Link>
    // <View style={styles.plantCard}>
    //   <ShowImage size={100} imageUri={plant.imageUri} />
    //   <View style={styles.details}>
    //     <Text numberOfLines={1} style={styles.plantName}>
    //       {plant.name}
    //     </Text>
    //     <Text style={styles.subtitle}>
    //       Water every {plant.wateringFrequencyDays} days
    //     </Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  plantCard: {
    flexDirection: "row",
    shadowColor: "black",
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: "gray",
  },
});
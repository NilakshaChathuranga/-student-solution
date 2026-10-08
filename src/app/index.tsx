import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const increasePoints = () => {
    setPoints(points + 1);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-1/746420841_122161756274661942_6254724297991545575_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s200x200&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGf9yESSff7jf-Lqhy9ALp6dmvO2PP36dF2a87Y8_fp0W1DVPf5ETqHfd9Yzax_JYWbKQNCNovLNzpVrpbHBSWh&_nc_ohc=M7AeyKy6AmoQ7kNvwHxzA--&_nc_oc=Adp63u86zmZOfN4X7Qe3MM2O2bR8av6wrUW0i494zyJkhR-DKScJ78oklt7ag_9-oOM&_nc_zt=24&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=3B6vSjmhftxu5HQ24_-hUQ&_nc_ss=7b2a8&oh=00_AQPwN5MntZXhDzLtdhfjIgvwhyO1TdnCO-1HDRIQ7x5YTA&oe=6ACD984A",
              }}
              style={styles.profileImage}
            />
            <View style={styles.badge}>
              <MaterialIcons name="check" size={14} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>NAME</Text>
            <Text style={styles.valueText}>Nilaksha</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoBlock}>
            <Text style={styles.label}>EMAIL</Text>
            <View style={styles.row}>
              <MaterialIcons
                name="mail-outline"
                size={18}
                color="#9CA3AF"
                style={styles.icon}
              />
              <Text style={styles.valueText}>Nilaksha.w@nsbm.ac.lk</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoBlock}>
            <Text style={styles.label}>REWARD POINTS</Text>
            <View style={styles.row}>
              <MaterialIcons
                name="stars"
                size={18}
                color="#FFD700"
                style={styles.icon}
              />
              <Animated.Text
                style={[
                  styles.pointsText,
                  { transform: [{ scale: scaleAnim }] },
                ]}
              >
                {points}
              </Animated.Text>
            </View>
          </View>
        </View>
      </View>

      {/* White FAB for high contrast in dark mode */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.7}
        onPress={increasePoints}
      >
        <MaterialIcons name="add" size={28} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Deep dark background
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  imageWrapper: {
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#1E1E1E",
  },
  badge: {
    position: "absolute",
    bottom: 2,
    right: 5,
    backgroundColor: "#10B981",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#121212",
    elevation: 4,
  },
  card: {
    backgroundColor: "#1E1E1E", // Slightly lighter card for contrast
    borderRadius: 16,
    padding: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginVertical: 18,
  },
  infoBlock: {
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#9CA3AF",
    marginBottom: 6,
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  valueText: {
    fontSize: 16,
    color: "#E5E7EB", // Off-white for better readability
    fontWeight: "500",
  },
  pointsText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 25,
    bottom: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingScreen";
import Info from "./info";
import { styles } from "./assetsStyle/style";
import { useState } from "react";

//Screen names
const homeName = "Home";
const detailsName = "Cities or Provinces";
const settingsName = "Search";

const Tab = createBottomTabNavigator();

function MainContainer() {
  const [infoStatus, setinfoStatus] = useState(false);
  const showInfo = (type) => {
    setinfoStatus(type);
  };
  return (
    <NavigationContainer>
      <TouchableOpacity
        onPress={() => showInfo(true)}
        style={[
          styles.absolute,
          {
            top: 40,
            zIndex: 10,
            right: 10,
            backgroundColor: "#1C50B5",
            padding: 5,
            borderRadius: 5,
          },
        ]}
      >
        <Feather name="info" size={20} color="#fff" style={styles.tCenter} />
      </TouchableOpacity>
      {infoStatus && (
        <View
          style={[
            styles.absolute,
            {
              top: "0%",
              width: "100%",
              height: "100%",
              zIndex: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00000062",
            },
          ]}
        >
          <Info showInfo={showInfo} />
        </View>
      )}
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "search" : "search-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

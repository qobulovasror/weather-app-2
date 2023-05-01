import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Entypo, Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import { styles, homeStyle } from "../assetsStyle/style";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [res, setRes] = useState("");
  const [errStatus, setErrStatus] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };
  const askPermission = async () => {
    const permission = await Location.getForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getUserLocation = async () => {
    const userLocation = await Location.getCurrentPositionAsync();
    let latitude, longitude;
    latitude = Number(userLocation.coords.latitude.toString().split(0, 8));
    longitude = Number(userLocation.coords.longitude.toString().split(0, 8));
    setLocation({ latitude: latitude, longitude: longitude });
    if (location.latitude && location.longitude) submitHandler();
  };

  async function submitHandler() {
    try {
      setRes("");
      setErrStatus(false);
      setErrMsg("");
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${api.key}`
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.cod == "404") {
            setErrStatus(true);
            setErrMsg(res.message);
          } else if (res.code == "400") {
            setErrStatus(true);
            setErrMsg(res.message);
          } else {
            setRes(res);
          }
        })
        .catch((err) => {
          setErrStatus(true);
          setErrMsg(err);
          setRes("");
        });
    } catch (err) {
      setErrStatus(true);
      setErrMsg(err);
    } finally {
      if (errStatus) {
        setRes();
        if (!errMsg) setErrMsg("Error");
      }
    }
  }

  const reload = () => {
    if (location.latitude && location.longitude) submitHandler();
    else {
      if (!checkPermission()) {
        setErrMsg("Error getting location");
        setErrStatus(true);
      } else {
        getUserLocation();
      }
    }
  };
  useEffect(() => {
    if (!checkPermission()) {
      setErrMsg("Error getting location");
    } else {
      getUserLocation();
    }
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/homeBg2.png")}
      style={styles.image}
    >
      <View style={[styles.conlumn, { marginTop: 10 }]}>
        <TouchableOpacity
          onPress={reload}
          style={[
            styles.absolute,
            homeStyle.reload,
            { top: 0, right: "5%", zIndex: 5 },
          ]}
        >
          <AntDesign name="reload1" size={25} color="#fff" />
        </TouchableOpacity>
        {!errMsg && (
          <View style={styles.conlumn}>
            <Text style={[styles.tCenter, { fontSize: 22, color: "#fff" }]}>
              Your location:
            </Text>
            <Text style={homeStyle.loc}>latitude: {location.latitude}</Text>
            <Text style={homeStyle.loc}>longitude: {location.longitude}</Text>
          </View>
        )}
        {errStatus && (
          <Text style={[styles.tCenter, { fontSize: 22, color: "#fff" }]}>
            {errMsg}
          </Text>
        )}
        {res && !errStatus && (
          <View>
            <Text style={homeStyle.cityName}>{res?.name}</Text>
            <Text style={homeStyle.date}>
              {new Date().toLocaleDateString()}
            </Text>
            <Text style={homeStyle.temp}>
              {Math.floor(res?.main?.temp - 273.15)}°C
            </Text>
            <Text style={{ fontSize: 40, color: "#fff", textAlign: "center" }}>
              --------------
            </Text>
            {res.weather[0] && (
              <Text style={homeStyle.description}>
                {res.weather[0].description}
              </Text>
            )}
            <View style={[styles.row, styles.around, { marginTop: 40 }]}>
              <View style={[styles.conlumn, homeStyle.miniCard]}>
                <Feather
                  name="wind"
                  size={25}
                  color="#fff"
                  style={styles.tCenter}
                />
                <Text style={homeStyle.miniCardText}>Wind speed</Text>
                <Text style={homeStyle.miniCardText}>
                  {res?.wind?.speed} m/s
                </Text>
              </View>
              <View style={[styles.conlumn, homeStyle.miniCard]}>
                <FontAwesome
                  name="compress"
                  size={25}
                  color="#fff"
                  style={styles.tCenter}
                />
                <Text style={homeStyle.miniCardText}>Pressure</Text>
                <Text style={homeStyle.miniCardText}>
                  {" "}
                  {res?.main?.pressure} hPa
                </Text>
              </View>
              <View style={[styles.conlumn, homeStyle.miniCard]}>
                <Entypo
                  name="drop"
                  size={25}
                  color="#fff"
                  style={styles.tCenter}
                />
                <Text style={homeStyle.miniCardText}>Humidity</Text>
                <Text style={homeStyle.miniCardText}>
                  {res?.main?.humidity} m/s
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const api = {
  key: "96cd9a48d7cd1602836ab80d13c2b540",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { styles } from "../assetsStyle/style";

export default function DetailsScreen({ navigation }) {
const [weatherData, setWeatherData] = useState([]); 
const [errorMsg, setErrorMsg] = useState('')
useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const cityIds = Object.values(CITIES).join(',');
        await fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=metric&appid=${apiKeyCities}`)
            .then((response) => response.json())
            .then((res) => {
                if(res.list)
                    setWeatherData(res.list)
            })
      } catch (error) {
        setErrorMsg(error)
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/cityBG2.png")}
        style={styles.image}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            {!weatherData && (
              <Text
                style={{ fontSize: 20, textAlign: "center", color: "#fff" }}
              >
                {errorMsg}
              </Text>
            )}
            {weatherData &&
              weatherData.map((item, index) => (
                <View style={[styles.card, styles.between]} key={index}>
                  <View style={[styles.conlumn, styles.countryInfo]}>
                    <Text style={styles.cityName}>{item?.name.replace('Viloyati','').replace('Province','')}</Text>
                    <Text style={styles.country}>{item?.sys?.country}</Text>
                  </View>
                  <Text style={styles.temp}>
                    {Math.floor(item?.main?.temp)}°C
                  </Text>
                  <View style={styles.conlumn}>
                    <View style={styles.row}>
                      <Feather name="wind" size={22} color="#7AA7F0" />
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        {item?.wind?.speed}km/h
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Entypo name="drop" size={22} color="#7AA7F0" />
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        {item?.main?.humidity}%
                      </Text>
                    </View>
                  </View>
                  {item?.weather[0] && (
                    <Image
                      source={{
                        uri: `http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`,
                      }}
                      style={{ width: 50, height: 50 }}
                    />
                  )}
                </View>
              ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}



const apiKeyCities = '66295b4d428809a2a4f5a1a9f366ac3f';
const CITIES = {
  'Andijan': '1484846',
  'Bukhara': '1217662',
  'Fergana': '1484845',
  'Jizzakh': '1484844',
  'Namangan': '1484842',
  'Navoiy': '1513131',
  'Qashqadaryo': '1114928',
  'Samarqand': '1216265',
  'Sirdaryo': '1512770',
  'Surxondaryo': '1114926',
  'Tashkent': '1512569',
  'Xorazm': '1484843'
};
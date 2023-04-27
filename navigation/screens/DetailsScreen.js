import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { apiKeyCities, CITIES } from "../config/config";
import { styles } from "../assetsStyle/style";




export default function DetailsScreen({ navigation }) {
//   const [citiesData, setCitiesData] = useState([]);
//   const [load, setLoad] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   async function loadDataHandler() {
//     setLoad(true);
//     setCitiesData([]);
//     const data = []
//     setErrorMsg("");
//     cities.forEach(async (city) => {
//       await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city.toString()}&units=metric&appid=${
//           api.key
//         }`
//       )
//         .then((response) => response.json())
//         .then((res) => {
//           if (res.cod == "404") {
//             throw Error("404");
//           } else {
//             data = [...data, res]
//             // const {name, sys, main, weather, wind} = res;
//           }
//         })
//         .catch((err) => {
//           setErrorMsg(err);
//         });
//     });
//     setCitiesData(data);
//     setLoad(false)
//   }

//   useEffect(() => {
//     loadDataHandler();
//   }, []);

const [weatherData, setWeatherData] = useState([]); 
const [errorMsg, setErrorMsg] = useState('')
useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const cityIds = Object.values(CITIES).join(',');
        await fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=metric&appid=${apiKeyCities}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                if(res.list)
                    setWeatherData(res.list)
            })
      } catch (error) {
        setErrorMsg(error)
        console.error(error);
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
    {
        // weatherData && 
        // weatherData.map(item=>(
        //     <Text style={{color: '#fff', fontSize: 20}}>
        //         {item.name}  ----- {item.main.temp}  
        //     </Text>
        // ))
    }


    </View>
  );
}





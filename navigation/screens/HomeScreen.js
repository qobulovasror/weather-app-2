import {
  View,
  Text,
  Button,
  ImageBackground
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {styles, homeStyle} from '../assetsStyle/style';

export default function HomeScreen({ navigation }) {
  const [location, setLocation]  = useState({latitude: "", longitude: ""});
  const [errorMsg, setErrorMsg] = useState(null);

   const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
     if (hasPermission.status === 'granted') {
    const permission = await askPermission();
    return permission;
     }
    return true;
   };
   const askPermission = async () => {
    const permission = await Location.getForegroundPermissionsAsync();
    return permission.status === 'granted';
   };

   const getUserLocation = async () => {
    const userLocation = await Location.getCurrentPositionAsync();
        setLocation({latitude: userLocation.coords.latitude, longitude: userLocation.coords.longitude });
   };

   const getDate = ()=>{
    var today  = new Date();
    return today.toLocaleDateString("en-US", 
        { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
         }); // Saturday, September 17, 2016
   }

   useEffect(()=>{
    if(!checkPermission()){
        setErrorMsg('fail')
    }else{
        getUserLocation()
    }
   },[])

  return (
    <ImageBackground 
        source={require('../../assets/homeBg2.png')}
        style={styles.image}
        >   
        <View style={[styles.conlumn, {}]}>
            <Text style={homeStyle.cityName}>Samarqand</Text>
            <Text style={homeStyle.date}>{getDate()}</Text>
            <Text style={homeStyle.temp}>20°C</Text>
            <Text style={{fontSize: 40, color: '#fff', textAlign: 'center'}}>--------------</Text>
            <Text style={homeStyle.description}>clear sky</Text>
            <Text style={homeStyle.loc}>{location.latitude}</Text>
            <Text style={homeStyle.loc}>{location.longitude}</Text>

        </View>
    </ImageBackground>
  );
}



// export default function HomeScreen({ navigation }) {
//   const [location, setLocation]  = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [text, setText] = useState('Waiting..');

//   useEffect(() => {
//     (async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//     if (errorMsg) {
//       setText(errorMsg)
//     } else if (location) {
//       setText(JSON.stringify(location));
//     }
  
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text 
//         style={{ fontSize: 26, fontWeight: "bold" }}
//         >{text}</Text>
//       <Text>{errorMsg}</Text>
//     </View>
//   );
// }

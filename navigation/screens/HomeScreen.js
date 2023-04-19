import {View, Text, Platform,  StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
// import styles from '../assetsStyle/style';

export default function HomeScreen({navigation}) {
    // const [location, setLocation]    = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);
    // const [text, setText] = useState('Waiting..');

    // useEffect(() => {
    //     // setLoac()
    //     (async () => {
    //       if (Platform.OS !== 'android') {
    //         setErrorMsg(
    //           'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
    //         );
    //         return;
    //       }
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
    //     setText(errorMsg)
    //   } else if (location) {
    //     setText(JSON.stringify(location));
    //   }

    
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                style={{fontSize: 26, fontWeight: 'bold'}}
            >
                {/* {text} */}
            </Text>
        </View>
    )
}
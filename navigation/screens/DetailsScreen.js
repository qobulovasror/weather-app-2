import * as React from 'react';
import {View, 
    Text, 
    ImageBackground,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import { Entypo, Feather  } from '@expo/vector-icons';
import {styles} from '../assetsStyle/style';
// import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailsScreen({navigation}) {
    return(
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/cityBG2.png')}
                style={styles.image}
            >
                {/* <TextInput
                    placeholderTextColor="#FFF"
                    placeholder='Search for city'
                    style={styles.input}/> */}
                <ScrollView style={styles.scrollContainer}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        {/* map */}
                        <View style={[styles.card, styles.between]} >
                            <View style={[styles.conlumn, styles.countryInfo]}>
                                <Text style={styles.cityName}>Samarqand</Text>
                                <Text style={styles.country}>UZB</Text>
                            </View>
                            <Text style={styles.temp}>8°C</Text>
                            <View style={styles.conlumn}>
                                <View style={styles.row}>
                                    <Feather name="wind" size={22} color="#7AA7F0" />
                                    <Text style={{color: '#fff' , fontSize: 15}}>17km/h</Text>
                                </View>
                                <View style={styles.row}>
                                    <Entypo name="drop" size={22} color="#7AA7F0" />
                                    <Text style={{color: '#fff' , fontSize: 15}}>17%</Text>
                                </View>
                            </View>
                            <Image source={{uri:`http://openweathermap.org/img/w/${'10d'}.png`}} style={{width: 50, height: 50}} />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
    
}


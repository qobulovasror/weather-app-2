import * as React from "react";
import { 
    View, 
    Text,
    ImageBackground,
    TextInput,
    ScrollView,
    Image,
} from "react-native";
import { Entypo, Feather, FontAwesome, AntDesign  } from '@expo/vector-icons';
import {styles, searchStyle} from "../assetsStyle/style";
// import searchStyle from "../assetsStyle/style";

export default function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/searchBg.png')}
        style={styles.image}
      >
        <TextInput
          placeholderTextColor="#FFF"
          placeholder="Search for city"
          style={styles.input}
        />
        <View style={[searchStyle.card, styles.between]}>
            <View style={styles.conlumn}>
              <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.conlumn}>
                    <View style={styles.row}>
                        <Entypo name="location-pin" size={25} color="coral" />
                        <Text style={searchStyle.cityName}>Samarqand,</Text>
                        <Text style={searchStyle.country}> UZ</Text>
                    </View>
                    <Text style={searchStyle.temp}>8°C</Text>
                    <Text style={searchStyle.info}> Clear</Text>
                </View>
                <Image
                    source={{ uri: `http://openweathermap.org/img/w/${"10d"}.png` }}
                    style={{ width: 120, height: 120 }}
                />
              </View>
              <View style={[styles.row, styles.conlumn, { margin: 15}]}>
                <View style={[styles.row, styles.between, searchStyle.infoList]}>
                    <Text style={{color: '#fff', fontSize: 20}}>Рumidity </Text>
                    <View style={styles.row}>
                        <Entypo name="drop" size={25} color="#7AA7F0" />
                        <Text style={{color: '#fff', fontSize: 20}}> 20%</Text>
                    </View>

                </View>
                <View style={[styles.row, styles.between, searchStyle.infoList]}>
                    <Text style={{color: '#fff', fontSize: 20}}>Wind speed</Text>
                    <View style={styles.row}>
                        <Feather name="wind" size={25} color="#7AA7F0" />
                        <Text style={{color: '#fff', fontSize: 20}}> 20 m/s</Text>
                    </View>
                </View>
                <View style={[styles.row, styles.between, searchStyle.infoList]}>
                    <Text style={{color: '#fff', fontSize: 20}}>Pressure  </Text>
                    <View style={styles.row}>
                        <FontAwesome name="compress" size={25} color="#7AA7F0" />
                        <Text style={{color: '#fff', fontSize: 20}}> 0.53hPa</Text>
                    </View>
                </View>
                <View style={[styles.row, styles.between, searchStyle.infoList]}>
                    <Text style={{color: '#fff', fontSize: 20}}>Clouds  </Text>
                    <View style={styles.row}>
                        <AntDesign name="cloudo" size={25} color="#7AA7F0" />
                        <Text style={{color: '#fff', fontSize: 20}}> 0%</Text>
                    </View>
                </View>
                <View style={[styles.row, styles.between, searchStyle.infoList]}>
                    <Text style={{color: '#fff', fontSize: 20}}>sunrise  </Text>
                    <View style={styles.row}>
                        <Feather name="sunrise" size={25} color="#7AA7F0"/>
                        <Text style={{color: '#fff', fontSize: 20}}> {
                            new Date(1681779065*1000).getHours()+ ":"+ new Date(1681779065*1000).getHours()
                        } </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.between, searchStyle.infoList]}>
                    <Text style={{color: '#fff', fontSize: 20}}>Clouds  </Text>
                    <View style={styles.row}>
                        <Feather name="sunset" size={25} color="#7AA7F0"/>
                        <Text style={{color: '#fff', fontSize: 20}}> 
                            {new Date(1681827105*1000).getHours()+ ":"+ new Date(1681827105*1000).getHours()}
                        </Text>
                    </View>
                </View>
              </View>

              
              {/* <View style={styles.conlumn}>
                <View style={styles.row}>
                  <Feather name="wind" size={22} color="#7AA7F0" />
                  <Text style={{ color: "#fff", fontSize: 15 }}>17km/h</Text>
                </View>
                <View style={styles.row}>
                  <Entypo name="drop" size={22} color="#7AA7F0" />
                  <Text style={{ color: "#fff", fontSize: 15 }}>17%</Text>
                </View>
              </View> */}
              

            </View>
        </View>
      </ImageBackground>
    </View>
  );
}

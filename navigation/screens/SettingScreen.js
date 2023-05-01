import {useState} from "react";
import { 
    View, 
    Text,
    ImageBackground,
    TextInput,
    Image,
    ActivityIndicator
} from "react-native";
import { Entypo, Feather, FontAwesome, AntDesign  } from '@expo/vector-icons';
import {styles, searchStyle} from "../assetsStyle/style";

export default function SettingScreen({ navigation }) {
  const [input, setInput] = useState("");
  const [load, setLoad] = useState(false);
  const [res, setRes] = useState("");
  const [errStatus, setErrStatus] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  async function submitHandler() {
    let inputReq = input.trim()
    if(!inputReq || inputReq.length<3) return;
    try {
      setLoad(true)
      setRes("")
      setErrStatus(false)
      setErrMsg("")
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputReq}&units=metric&appid=${api.key}`)
      .then((response) => response.json())
      .then(res=>{
        setRes(res)
        if(res.cod=='404'){
          setErrStatus(true)
          setErrMsg(res.message) 
        }
      })
      .catch(err=>{
        setErrStatus(true)
        setErrMsg(err)  
        setRes("")
      })
    }
    catch(err) {  
      setErrStatus(true)
      setErrMsg(err)   
    }
    finally {
      setLoad(false);
      setInput("")
      if(errStatus){
        setRes()
        if(!errMsg)
          setErrMsg("Error") 
      }
    }
  }

  const getSunSet = (type)=>{
    if(res.sys.sunrise && res.sys.sunset){
      if(type==='set'){
        return new Date(res.sys.sunset*1000).getHours()+ ":"+ new Date(res.sys.sunset*1000).getHours()
      }else{
        return new Date(res.sys.sunrise*1000).getHours()+ ":"+ new Date(res.sys.sunrise*1000).getHours()
      }
    }
  }

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
          onChangeText={text=>setInput(text)}
          value={input}
          onSubmitEditing={submitHandler}
        />
        {load && <View>
            <ActivityIndicator size={'large'} color="#fff"></ActivityIndicator>
          </View>}
        {
          !errStatus && res &&
          <View style={[searchStyle.card, styles.between]}>
              <View style={styles.conlumn}>
                <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.conlumn}>
                      <View style={styles.row}>
                          <Entypo name="location-pin" size={25} color="coral" />
                          <Text style={searchStyle.cityName}>{res?.name}</Text>
                          <Text style={searchStyle.country}> {res?.sys?.country}</Text>
                      </View>
                      <Text style={searchStyle.temp}>{`${Math.round(res?.main?.temp)} °C`}</Text>
                      <Text style={searchStyle.info}> {res?.weather[0]?.main}</Text>
                  </View>
                  {
                    res?.weather[0]?.icon &&
                    <Image
                        source={{ uri: `http://openweathermap.org/img/w/${res?.weather[0]?.icon}.png` }}
                        style={{ width: 120, height: 120 }}
                    />
                  }
                </View>
                { res?.weather && <Text style={searchStyle.description}>{`${res?.weather[0]?.description}`} </Text>}
                <View style={[styles.row, styles.conlumn, { marginTop: 20}]}>
                  <View style={[styles.row, styles.between, searchStyle.infoList]}>
                      <Text style={{color: '#fff', fontSize: 20}}>Humidity </Text>
                      <View style={styles.row}>
                          <Entypo name="drop" size={25} color="#7AA7F0" />
                          <Text style={{color: '#fff', fontSize: 20}}> {res?.main?.humidity}%</Text>
                      </View>

                  </View>
                  <View style={[styles.row, styles.between, searchStyle.infoList]}>
                      <Text style={{color: '#fff', fontSize: 20}}>Wind speed</Text>
                      <View style={styles.row}>
                          <Feather name="wind" size={25} color="#7AA7F0" />
                          <Text style={{color: '#fff', fontSize: 20}}> {res?.wind?.speed} m/s</Text>
                      </View>
                  </View>
                  <View style={[styles.row, styles.between, searchStyle.infoList]}>
                      <Text style={{color: '#fff', fontSize: 20}}>Pressure</Text>
                      <View style={styles.row}>
                          <FontAwesome name="compress" size={25} color="#7AA7F0" />
                          <Text style={{color: '#fff', fontSize: 20}}> {res?.main?.pressure}hPa</Text>
                      </View>
                  </View>
                  <View style={[styles.row, styles.between, searchStyle.infoList]}>
                      <Text style={{color: '#fff', fontSize: 20}}>Clouds  </Text>
                      <View style={styles.row}>
                          <AntDesign name="cloudo" size={25} color="#7AA7F0" />
                          <Text style={{color: '#fff', fontSize: 20}}> {res?.clouds?.all}%</Text>
                      </View>
                  </View>
                  <View style={[styles.row, styles.between, searchStyle.infoList]}>
                      <Text style={{color: '#fff', fontSize: 20}}>Sunrise  </Text>
                      <View style={styles.row}>
                          <Feather name="sunrise" size={25} color="#7AA7F0"/>
                          <Text style={{color: '#fff', fontSize: 20}}> {getSunSet('rise')} </Text>
                      </View>
                  </View>
                  <View style={[styles.row, styles.between, searchStyle.infoList]}>
                      <Text style={{color: '#fff', fontSize: 20}}>Sunset</Text>
                      <View style={styles.row}>
                          <Feather name="sunset" size={25} color="#7AA7F0"/>
                          <Text style={{color: '#fff', fontSize: 20}}> {getSunSet('set')}</Text>
                      </View>
                  </View>
                </View>
          

              </View>
          </View>
        }
      </ImageBackground>
    </View>
  );
}

const api = {
  key: "96cd9a48d7cd1602836ab80d13c2b540",
  baseUrl: "https://api.openweathermap.org/data/2.5/"
}
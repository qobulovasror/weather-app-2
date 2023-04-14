import * as React from 'react';
import {View, 
    Text, 
    ImageBackground,
    StyleSheet,
    TextInput,
    ScrollView,
} from 'react-native';
// import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailsScreen({navigation}) {
    return(
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/cityBG2.png')}
                style={styles.image}
            >
                <TextInput
                    placeholderTextColor="#FFF"
                    placeholder='Search for city'
                    style={styles.input}/>
                <ScrollView style={styles.scrollContainer}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <View style={styles.card} >
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <View style={styles.nigth}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Ionicons name="sunny" size={40} color="#F2DE11" />
                                        <Text style={{fontSize: 35, marginStart: 10}}>8°C</Text>
                                    </View>
                                </View>
                                <View style={styles.light}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Ionicons name="moon-sharp" size={40} color="#000000" />
                                        <Text style={{fontSize: 35, marginStart: 10}}>8°C</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.cityName}>Samarqand</Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00004C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 0
    },
    input: {
        height: 45,
        margin: 20,
        borderRadius: 30,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderColor: '#fff',
        borderWidth: 3,
        padding: 10,
        paddingStart: 20,
        color: '#fff',
        fontSize: 20,
    },
    scrollContainer: {
        paddingHorizontal: 2,
        paddingVertical: 2,
    },
    card : {
        height: 130,
        borderRadius: 20,
        margin: 20,
        backgroundColor: '#3285DE',
        // backgroundColor: '#1C65BA',
        color: '#ffffff',
        padding: 15,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'column'

    },
    nigth: {
        width: '50%',
        padding: 3,
        borderColor: '#000',
        borderWidth: 1,
        marginEnd: 5,
        borderRadius: 8
    },
    light: {
        width: '50%',
        padding: 3,
        borderColor: '#000',
        borderWidth: 1,
        marginStart: 5,
        borderRadius: 8
    },
    cityName: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    }
})
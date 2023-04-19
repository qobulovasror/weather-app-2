import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conlumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    between: {
        justifyContent: 'space-between'
    },
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
        margin: 10,
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
        height: 70,
        borderRadius: 20,
        margin: 10,
        marginEnd: 20,
        marginStart: 20,
        // backgroundColor: '#3285DE',
        // backgroundColor: '#152C39',
        backgroundColor: '#1A50B5',
        color: '#ffffff',
        padding: 10,
        display: 'flex',
        flexDirection: 'row'

    },
    countryInfo: {
        marginStart: 10
    },
    cityName: {
        color: '#fff',
        fontSize: 17,
    },
    country: {
        color: '#F07427',
        fontSize: 13,
    },
    temp: {
        fontSize: 30, 
        color: '#fff'
    }
})

export default styles;
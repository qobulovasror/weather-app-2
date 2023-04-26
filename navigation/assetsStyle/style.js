import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conlumn: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  around: {
      justifyContent: 'space-around'
  },
  between: {
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#00004C",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    top: 0,
  },
  input: {
    height: 45,
    margin: 10,
    borderRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderColor: "#fff",
    borderWidth: 3,
    padding: 10,
    paddingStart: 20,
    color: "#fff",
    fontSize: 20,
  },
  scrollContainer: {
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  card: {
    height: 70,
    borderRadius: 20,
    margin: 10,
    marginEnd: 20,
    marginStart: 20,
    // backgroundColor: '#3285DE',
    // backgroundColor: '#152C39',
    backgroundColor: "#1A50B5",
    color: "#ffffff",
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  countryInfo: {
    marginStart: 10,
  },
  cityName: {
    color: "#fff",
    fontSize: 17,
  },
  country: {
    color: "#F07427",
    fontSize: 13,
  },
  temp: {
    fontSize: 30,
    color: "#fff",
  },
});

const searchStyle = StyleSheet.create({
  card: {
    borderRadius: 20,
    margin: 10,
    marginEnd: 20,
    marginStart: 20,
    backgroundColor: "#1A50B5",
    color: "#ffffff",
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  cityName: {
    color: "#fff",
    fontSize: 20,
  },
  country: {
    color: "#F07427",
    fontSize: 20,
  },
  temp: {
    fontSize: 50,
    color: "#fff",
  },
  info: {
    padding: 5,
    paddingEnd: 5,
    borderRadius: 10,
    backgroundColor: "#3DA7FF",
    color: '#fff',
    fontSize: 25,
    alignSelf: 'flex-start'
  },
  infoList: {
    marginBottom: 8, 
    borderBottomColor: '#242B45', 
    borderBottomWidth: 1, 
    paddingBottom: 2
  },
  description: {
    padding: 5,
    backgroundColor: "#1E9AFF",
    color: '#fff',
    borderRadius: 10,
    fontSize: 20,
    marginTop: 20, 
    marginStart: 15,
    textAlign: 'center'
  }
});
const homeStyle = StyleSheet.create({
  cityName: {
    fontSize: 50, 
    color: '#fff', 
    textAlign: 'center',
    margin: 20
  },
  date: {
    fontSize: 20, 
    color: '#fff',
    textAlign: 'center',
  },
  temp: {
    fontSize: 100, 
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 50, 
    color: '#fff',
    textAlign: 'center',
  },
  loc: {
    fontSize: 20, 
    color: '#fff',
    textAlign: 'center',
  }
});

export {styles, searchStyle, homeStyle}
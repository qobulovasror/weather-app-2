import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, FontAwesome, Foundation } from "@expo/vector-icons";
import { styles } from "./assetsStyle/style";

function Info({ showInfo }) {
  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          width: "85%",
          height: "70%",
          zIndex: 11,
          padding: 30,
          borderRadius: 15,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => showInfo(false)}
        style={[
          styles.absolute,
          {
            top: "5%",
            right: "5%",
            zIndex: 10,
            backgroundColor: "#1C50B5",
            padding: 5,
            borderRadius: 5,
          },
        ]}
      >
        <Feather name="x" size={25} color="#fff" style={styles.tCenter} />
      </TouchableOpacity>
      <Text style={[styles.tCenter, { fontSize: 20, marginStart: 5 }]}>
        Application info
      </Text>
      <View style={{ top: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          About the program:
        </Text>
        <Text style={{ fontSize: 20, marginStart: 5 }}>
          This program is a program that receives current weather information.
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Programmer:</Text>
        <View style={[styles.row, { marginEnd: 10, marginStart: 10 }]}>
          <FontAwesome
            name="user"
            size={25}
            color="#000"
            style={styles.tCenter}
          />
          <Text style={{ fontSize: 20, marginStart: 5 }}>Qobulov Asror</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Contact me</Text>
        <View style={[styles.row, { marginEnd: 10, marginStart: 10 }]}>
          <FontAwesome
            name="telegram"
            size={25}
            color="#000"
            style={styles.tCenter}
          />
          <Text style={{ fontSize: 20, marginStart: 5, marginEnd: 10 }}>
            @Qobulov_Asror
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Phone:</Text>
        <View style={[styles.row, { marginEnd: 10, marginStart: 10 }]}>
          <Foundation
            name="telephone"
            size={25}
            color="#000"
            style={styles.tCenter}
          />
          <Text style={{ fontSize: 20, marginStart: 5 }}>
            +9989 93 358 28 27
          </Text>
        </View>
        <Image
          source={require("../assets/qr_code.jpg")}
          style={{
            width: 180,
            height: 180,
            marginStart: 40,
            borderColor: "#00f",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
}

export default Info;

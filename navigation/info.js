import { View, Text, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
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
          padding: 20,
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
        <Text style={{ fontSize: 20, marginStart: 5 }}>Qobulov Asror</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Murojat uchun:</Text>
        <Text style={{ fontSize: 20, marginStart: 5 }}>
          <FontAwesome
            name="telegram"
            size={25}
            color="#fff"
            style={styles.tCenter}
          />
          @Qobulov_Asror
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Telifon:+9989 93 358 28 27
        </Text>
      </View>
    </View>
  );
}

export default Info;

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { FontSize, FontFamily } from "../global/GlobalStyles";

export default function Card(props) {
  const images = [
    require("../assets/cardbg1.png"),
    require("../assets/cardbg2.png"),
    require("../assets/cardbg3.png"),
    require("../assets/cardbg4.png"),
    require("../assets/cardbg5.png"),
    require("../assets/cardbg6.png"),
    require("../assets/cardbg7.png"),
    require("../assets/cardbg8.png"),
    require("../assets/cardbg9.png"),
    require("../assets/cardbg10.png"),
    require("../assets/cardbg11.png"),
    require("../assets/cardbg12.png"),
    require("../assets/cardbg13.png"),
    require("../assets/cardbg14.png"),
  ];

  const [bgImageIndex, setBgImageIndex] = useState(0);

  useEffect(() => {
    setBgImageIndex(Math.floor(Math.random() * images.length));
  }, []);

  const textColor =
    bgImageIndex >= 10 && bgImageIndex <= 13 ? "white" : "black";

  const styles = StyleSheet.create({
    id: {
      fontSize: FontSize.small,
      margin: -10,
      color: textColor,
    },
    text: {
      fontFamily: FontFamily.interBold,
      fontSize: FontSize.medium,
      margin: 20,
      marginTop: 15,
      color: textColor,
    },
    icon: {
      height: 30,
      width: 30,
      margin: 20,
      tintColor: textColor,
    },
    bg: {
      overflow: "hidden",
      position: "absolute",
      height: 300,
      width: 300,
    },
    card: {
      backgroundColor: "#071C42",
      borderRadius: 20,
      borderColor: "#071C42",
      width: "90%",
      height: 150,
      margin: 5,
      alignSelf:"center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
  });

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.navigation.navigate("Map")}
    >
      <ImageBackground
        source={images[bgImageIndex]}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Image
            source={require("../assets/favicon.png")}
            style={styles.icon}
          />
          <Text style={styles.id}>#{props.id}</Text>
        </View>
        <Text style={styles.text}>{props.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

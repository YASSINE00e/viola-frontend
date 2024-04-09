import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import IconButton from "../components/customIconButton";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

export default function Signup(props) {
  const [tracking, setTracking] = useState(true);

  const handleAddPatient = async () => {};
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 35.76353,
            longitude: 10.805184,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {tracking && (
            <Marker
              coordinate={{
                latitude: 35.76353,
                longitude: 10.805184,
              }}
              title="Your Patient."
              description="Your Patient is here."
            />
          )}
        </MapView>
        <IconButton
          onPress={() => props.navigation.navigate("Home")}
          source={require("../assets/back-button.png")}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    top: height * 0.15,
    width: 600,
    height: 715,
    position: "absolute",
    alignSelf: "center",
    tintColor: Color.bg2,
    opacity: 0.25,
  },

  map: {
    flex: 1,
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },
});

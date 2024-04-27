import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Color } from "../global/GlobalStyles";
import Footer from "../components/customFooter";
import Header from "../components/customHeader";
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
        <View style={styles.mapcontainer}>
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
        </View>
        <Header
          navigation={props.navigation}
          title="Track you patient."
          onPressright={() => alert("help")}
          right={require("../assets/dots.png")}
          onPressleft={() => props.navigation.navigate("Home")}
          left={require("../assets/back.png")}
        ></Header>

        <Footer navigation={props.navigation} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    top: height * 0.17,
    width: 600,
    height: 715,
    position: "absolute",
    alignSelf: "center",
    tintColor: Color.bg2,
    opacity: 0.25,
  },

  mapcontainer: {
    flex: 1,
    marginTop: height * 0.15,
    marginBottom: height * 0.1,
    height: height * 0.82,
    width: "95%",
    borderRadius: 40,
    overflow: "hidden",
  },
  map: {
    height: "100%",
    width: "100%",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

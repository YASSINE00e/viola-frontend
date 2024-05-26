import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color } from "../global/GlobalStyles";
import { Camera } from "expo-camera";
import Button from "../components/customButton";
import Header from "../components/customHeader";
import apiRoutes from "../global/apiRoutes";
import { post } from "../global/apiCalls";

const { width, height } = Dimensions.get("window");

export default function QrCodeScanner({ navigation }) {
  const [flash, setFlash] = useState("off");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const handleAddPatient = async (data) => {
    const caregiverId = parseInt(await AsyncStorage.getItem("id"));

    const body = {
      ViolaId: data,
      CaregiverId: caregiverId,
    };

    try {
      const response = await post(apiRoutes.checkViolaId, body);
      if (response.status == 200) {
        navigation.navigate("AddPatient", { ViolaId: data });
      } else if (response.status == 201) {
        navigation.navigate("Home");
      } else if (response.status == 409) {
        Alert.alert("Patient already exists");
      } else {
        Alert.alert("An error occurred.");
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const toggleFlash = () => {
    setFlash(flash === "off" ? "torch" : "off");
  };

  const handleBarCodeRead = ({ data }) => {
    setScanned(true);
    handleAddPatient(data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <Header
          navigation={navigation}
          title="Add your patient."
          onPressright={() => alert("Scanne the QrCode in the bracelet box.")}
          right={require("../assets/dots.png")}
          onPressleft={() => navigation.navigate("Home")}
          left={require("../assets/back.png")}
        ></Header>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <Header
          navigation={navigation}
          title="Add your patient."
          onPressright={() => alert("help")}
          right={require("../assets/dots.png")}
          onPressleft={() => navigation.navigate("Home")}
          left={require("../assets/back.png")}
        ></Header>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
          width={width}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.bg}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
      <Header
        navigation={navigation}
        title="Add your patient."
        onPressright={() => alert("help")}
        right={require("../assets/dots.png")}
        onPressleft={() => navigation.navigate("Home")}
        left={require("../assets/back.png")}
      ></Header>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          flashMode={flash}
          onBarCodeScanned={scanned ? undefined : handleBarCodeRead}
        />
      </View>
      <Button
        title={flash === "off" ? "Turn on flash" : "Turn off flash"}
        onPress={toggleFlash}
        width={width}
        style={{ margin: 10 }}
      />
      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          width={width}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    top: height * 0.3,
    right: 0,
    width: 650,
    height: 715,
    position: "absolute",
    tintColor: Color.bg1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
});

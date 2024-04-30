import React, { useState, useEffect } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import { Camera } from "expo-camera";
import Button from "../components/customButton";

const { width, height } = Dimensions.get("window");

export default function  QrCodeScanner ({ navigation }) {
  const [flash, setFlash] = useState("off");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
    navigation.navigate('AddPatient', { ViolaId: data });
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
};

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



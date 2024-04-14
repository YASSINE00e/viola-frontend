import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import IconButton from "../components/customIconButton";
import Card from "../components/customCard";
import Button from "../components/customButton";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [hasPatient, sethasPatient] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />

      <IconButton
        onPress={() => navigation.navigate("Settings")}
        source={require("../assets/accounticon.png")}
      />
      <IconButton
        onPress={() => navigation.navigate("AddPatient")}
        source={require("../assets/addicon.png")}
        style={{ right: 30, left: null }}
      />

      {!hasPatient && (
        <View style={styles.nopatientfound}>
          <Text style={styles.nopatient}>No patient found!</Text>
          <Text style={styles.addonenow}>
            Add one now, and start tracking them.
          </Text>

          <Button
            title="Get started"
            onPress={() => navigation.navigate("AddPatient")}
            style={{ width: width * 0.5 }}
          />
        </View>
      )}

      {hasPatient && (
        <View style={styles.cardcontainer}>
          <Card navigation={navigation} id="1"></Card>
          <Card navigation={navigation} id="2"></Card>
          <Card navigation={navigation} id="3"></Card>
          <Card navigation={navigation} id="3"></Card>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: 650,
    height: 715,
    position: "absolute",
    tintColor: Color.bg,
    opacity: 0.5,
  },
  SettingsIcon: {
    top: 45,
    left: 30,
    height: 40,
    width: 40,
    position: "absolute",
  },
  AddIcon: {
    top: 45,
    right: 30,
    height: 40,
    width: 40,
    position: "absolute",
  },
  Addtext: {
    color: Color.White,
    textAlign: "center",
    padding: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.Black,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.Black,
    width: width * 0.7,
    height: 55,
  },

  nopatientfound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },

  cardcontainer: {
    alignItems: "center",
    flexDirection: "column",
    top: 130,
    //flex: 1,
  },

  addonenow: {
    fontSize: FontSize.small,
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
    color: "#565656",
    paddingTop: 5,
    paddingBottom: 10,
  },
  nopatient: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    fontWeight: "900",
  },
});

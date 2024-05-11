import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import Header from "../components/customHeader";
import Button from "../components/customButton";
import Footer from "../components/customFooter";
import Input from "../components/customInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoutes from "../global/apiRoutes";
import { get } from "../global/apiCalls";

const { width, height } = Dimensions.get("window");

export default function EditPatient(props) {
  const [loading, setLoading] = useState(true);
  const [name, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [age, onChangeAge] = useState("");
  const [bloodtype, onChangeBloodtype] = useState("");
  const [houselocation, onChangeHL] = useState("");
  const [weight, onChangeWeight] = useState("");

  const fetchPatientsData = async () => {
    setLoading(true);
    try {
      const patientsId = parseInt(await AsyncStorage.getItem("Patientsid"));
      const response = await get(
        apiRoutes.getPatientsData + `?id=${patientsId}`
      );
      if (response.status == 200) {
        const data = response.data;
        onChangeName(data.name);
        onChangeSurname(data.surname);
        onChangeHL(data.houseLocation);
        onChangeWeight(data.weight.toString());
        onChangeAge(data.age.toString());
        onChangeBloodtype(data.bloodType);
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPatientsData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.bg} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.bg}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />

        <Header
          navigation={props.navigation}
          title="EditPatient."
          onPressright={() => alert("EditPatient")}
          right={require("../assets/dots.png")}
          onPressleft={() => props.navigation.navigate("Home")}
          left={require("../assets/back.png")}
        ></Header>

        <View style={styles.addpatientcontainer}>
          <Input
            title="your patient fullname"
            value={name + " " + surname}
            placeholder="name"
            editable={false}
          />
          <Input
            title="your patient age"
            value={age}
            placeholder="65"
            editable={false}
          />
          <Input
            title="your patient bloodtype"
            value={bloodtype}
            placeholder="O+"
            editable={false}
          />
          <Input
            title="your patient house location"
            onChangeText={onChangeHL}
            value={houselocation}
            placeholder="R6, Monastir"
          />
          <Input
            title="your patient weight"
            onChangeText={onChangeWeight}
            value={weight}
            placeholder="65kg"
            keyboardType="numeric"
          />
          <Button title="Done" onPress={{}} width={width} />
        </View>
        <Footer navigation={props.navigation} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
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

  addpatientcontainer: {
    top: height * 0.15,
    alignSelf: "center",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },
});

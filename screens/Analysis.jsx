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
import Header from "../components/customHeader";
import Footer from "../components/customFooter";
import Button from "../components/customButton";
import AnalysisCard from "../components/customAnalysisCard";
const { width, height } = Dimensions.get("window");

export default function Analysis(props) {
  const [hr, onChangeHr] = useState(76);
  const [steps, onChnageSteps] = useState(11.765);
  const [calories, onChnageCalories] = useState(780);
  const [movement, onChnageMovement] = useState("Normal");
  const [sugar, onChnageSugar] = useState(0.6);
  const [blood, onChnageBlood] = useState(11.3);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />

      <Header
        navigation={props.navigation}
        title="Analysis."
        onPressright={() => alert("Analysis")}
        right={require("../assets/dots.png")}
        onPressleft={() => props.navigation.navigate("Home")}
        left={require("../assets/back.png")}
      ></Header>

      <View style={styles.view}>
        <AnalysisCard
          navigation={props.navigation}
          icon={require("../assets/heart.png")}
          title="Heart rate"
          text={hr + " bmp"}
        />
        <AnalysisCard
          navigation={props.navigation}
          icon={require("../assets/footprint.png")}
          title="Steps"
          text={steps}
        />
        <AnalysisCard
          navigation={props.navigation}
          icon={require("../assets/fire.png")}
          title="Calories"
          text={calories + " kCal"}
        />

        <AnalysisCard
          navigation={props.navigation}
          icon={require("../assets/run.png")}
          title="Movement"
          text={movement}
        />
        <AnalysisCard
          navigation={props.navigation}
          icon={require("../assets/glucometer.png")}
          title="Sugar"
          text={sugar}
        />
        <AnalysisCard
          navigation={props.navigation}
          icon={require("../assets/blood.png")}
          title="Blood"
          text={blood}
        />
        <Button
        title="Ai analysis"
        //onPress={}
        width={width}
        style={{ width: "92%", margin: 10 }}
      />
      </View>


      <Footer navigation={props.navigation} />
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
  backButtonIcon: {
    top: 35,
    left: 30,
    height: 45,
    width: 45,
    position: "absolute",
  },

  view: {
    flex: 1,
    top:height*0.2,
    justifyContent: "center",
    //alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    width: width * 0.7,
    fontWeight: "900",
  },
});

import React, { useState } from "react";
import Homestack from "./routes/homestack";
import Welcomestack from "./routes/welcomestack";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  const [LogedIn, setLogedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
      "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
      "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
      "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
      "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    });
  };

  const setup = async () => {
    await loadFonts();
  };

  if (loaded) {
    return (
      <NavigationContainer>
        {LogedIn ? <Homestack /> : <Welcomestack setLogedIn={setLogedIn} />}
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={setup}
        onFinish={() => setLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

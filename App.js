import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



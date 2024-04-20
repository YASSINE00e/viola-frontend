import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
const Stack = createNativeStackNavigator();
export default function Welcomestack({ setLogedIn }) {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" options={{}}>
        {(screenProps) => <Login {...screenProps} setLogedIn={setLogedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" options={{}}>
        {(screenProps) => <Signup {...screenProps} setLogedIn={setLogedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

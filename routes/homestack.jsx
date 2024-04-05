import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import AddPatient from "../screens/AddPatient";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddPatient" component={AddPatient} />
    </Stack.Navigator>
  );
}

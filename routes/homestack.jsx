import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import AddPatient from "../screens/AddPatient";
import Map from "../screens/Map";
import Analysis from "../screens/Analysis";
import EditPatient from "../screens/EditPatient";
import QrCodeScanner from "../screens/QrCodeScanner";

import Footer from "../components/customFooter";

export default function Homestack({ setLogedIn }) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" options={{}}>
        {(screenProps) => <Settings {...screenProps} setLogedIn={setLogedIn} />}
      </Stack.Screen>
      <Stack.Screen name="AddPatient" component={AddPatient} />
      <Stack.Screen name="QrCodeScanner" component={QrCodeScanner} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Analysis" component={Analysis} />
      <Stack.Screen name="EditPatient" component={EditPatient} />
      <Stack.Screen name="Footer" component={Footer} />
    </Stack.Navigator>
  );
}

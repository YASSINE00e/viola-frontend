import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
const Stack = createNativeStackNavigator();
export default function Welcomestack({ setSignedIn }) {



  return (
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signin" options={{}}>
          {(screenProps) => <Signin {...screenProps} setSignedIn={setSignedIn} />}
        </Stack.Screen>
          <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>
  );
}

import React, { useState } from "react";
import Homestack from "./routes/homestack";
import Welcomestack from "./routes/welcomestack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [LogedIn, setLogedIn] = useState(false);

  return (
    <NavigationContainer>
      {LogedIn ? <Homestack /> : <Welcomestack setLogedIn={setLogedIn} />}
    </NavigationContainer>
  );
}

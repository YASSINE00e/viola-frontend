import React, { useState } from "react";
import Homestack from "./routes/homestack";
import Welcomestack from "./routes/welcomestack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <NavigationContainer>
      {signedIn ? <Homestack /> : <Welcomestack setSignedIn={setSignedIn} />}
    </NavigationContainer>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { FontSize, FontFamily, Color } from "../global/GlobalStyles";
import IconButton from "../components/customIconButton";
import Card from "../components/customCard";
import Button from "../components/customButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoutes from "../global/apiRoutes";
import { get } from "../global/apiCalls";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const caregiverId = parseInt(await AsyncStorage.getItem("id"));
      const response = await get(apiRoutes.getPatients + `?id=${caregiverId}`);
      if (response.status == 200) {
        setPatients(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const Quote = async () => {
    try {
      const response = await get(apiRoutes.quote);
      if (response.status == 200) {
        Alert.alert("Quote:", response.res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
    Quote();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPatients().then(() => setRefreshing(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.bg} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bg}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />

      <IconButton
        onPress={() => navigation.navigate("Settings")}
        source={require("../assets/accounticon.png")}
      />
      <IconButton
        onPress={() => navigation.navigate("QrCodeScanner")}
        source={require("../assets/addicon.png")}
        style={{ right: 30, left: null }}
      />
      <View style={styles.cardcontainer}>
        <FlatList
          data={patients}
          keyExtractor={(item) => `${item.ViolaId}`}
          renderItem={({ item }) => (
            <Card
              navigation={navigation}
              id={item.ViolaId}
              name={item.Name + " " + item.Surname}
            />
          )}
          style={{ width: "100%", height: height * 0.9 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View style={styles.nopatientfound}>
              <Text style={styles.nopatient}>No patient found!</Text>
              <Text style={styles.addonenow}>
                Add one now, and start tracking them.
              </Text>
              <Button
                title="Get started"
                onPress={() => navigation.navigate("QrCodeScanner")}
                style={{ width: width * 0.5 }}
              />
            </View>
          }
        />
      </View>
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

  nopatientfound: {
    height: height * 0.7,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: Color.White,
    flex: 1,
    width: "100%",
  },

  cardcontainer: {
    alignItems: "center",
    flexDirection: "column",
    top: 100,
  },

  addonenow: {
    fontSize: FontSize.small,
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
    color: "#565656",
    paddingTop: 5,
    paddingBottom: 10,
  },
  nopatient: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.interBold,
    color: Color.Black,
    fontWeight: "900",
  },
});

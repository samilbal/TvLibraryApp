import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getDetails } from "../functions/getDetails";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Interact from "../components/Interact";
import COLORS from "../constants/COLORS";

const DetailScreen = ({ route, navigation }) => {
  const [details, setDetails] = useState({});
  const { id, backdrop_path, poster_path, item } = route.params;

  const loadDeets = useState(async () => {
    const deets = await getDetails(id);
    setDetails({ overview: deets[0].data.overview });
  }, []);

  let posterUrl = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: posterUrl }}
          style={styles.imageBg}
          resizeMode="cover"
          blurRadius={2}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.overview}>{details.overview}</Text>

          <Interact
            id={item.id}
            title={item.title}
            poster_path={poster_path}
          ></Interact>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  overview: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: COLORS.pinkish_fade,
    borderRadius: 10,
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: COLORS.dark_blue,
    borderRadius: 10,
    textAlign: "justify",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
});

export default DetailScreen;

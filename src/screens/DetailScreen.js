import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getDetails } from "../functions/getDetails";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Interact from "../components/Interact";

const DetailScreen = ({ route, navigation }) => {
  const [details, setDetails] = useState({});
  const { id, backdrop_path, poster_path, item, currentList, rmButton } =
    route.params;

  useEffect(() => {
    const loadDeets = async () => {
      const deets = await getDetails(id);
      setDetails({ overview: deets[0].data.overview });
    };
    loadDeets();
  }, []);

  let posterUrl = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: posterUrl }}
          style={styles.imageBg}
          resizeMode="cover"
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.overview}>{details.overview}</Text>

          <Interact
            id={item.id}
            title={item.title}
            poster_path={poster_path}
            currentList={currentList}
            navigation={navigation}
            rmButton={rmButton}
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
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#B5446E",
    borderRadius: 10,
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#B5446E",
    borderRadius: 10,
    textAlign: "justify",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
});

export default DetailScreen;

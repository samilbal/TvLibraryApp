import React from "react";
import { ImageBackground, View, StyleSheet, Button } from "react-native";

const Movie = ({ title, poster_path }) => {
  let url = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: url }}
        resizeMode="stretch"
        style={[styles.image, styles.dropShadow]}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 11,
    padding: 8,
    width: 250,
    marginHorizontal: 2,
    height: 300,
  },
  image: {
    flex: 1,
    padding: 8,
    borderRadius: 24,
    overflow: "hidden",
    justifyContent: "flex-end",
    borderColor: "transparent",
    borderWidth: 6,
  },
  text: {
    color: "black",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 10,
    marginBottom: 10,
  },
  dropShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
});

export default Movie;

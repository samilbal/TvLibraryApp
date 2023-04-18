import React from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";

const Movie = ({ title, poster_path }) => {
  let url = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: url }}
        resizeMode="stretch"
        style={styles.image}
      >
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
          {title}
        </Text>
      </ImageBackground>
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
    borderRadius: 11,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 12,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c1",
    borderRadius: 10,
  },
});

export default Movie;

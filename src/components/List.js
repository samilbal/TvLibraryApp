import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-elements";
import Movie from "../components/Movie";

const List = ({ navigation, list, title, currentList }) => {
  const currentArr = [];
  list.list.forEach((movie) => {
    currentArr.push(movie);
  });

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list.list}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", {
                  id: item.id,
                  item: item,
                  backdrop_path: item.backdrop_path,
                  poster_path: item.poster_path,
                  currentList,
                  rmButton: true,
                });
              }}
            >
              <Movie
                title={item.title}
                id={item.id}
                poster_path={item.poster_path}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 700,
    borderBottomWidth: 2,
    width: 235,
  },
});

export default List;

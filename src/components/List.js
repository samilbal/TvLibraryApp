import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native-elements";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import { View } from "react-native";

const List = ({ list, title }) => {
  const currentArr = [];
  console.log(title);
  list.list.forEach((movie) => {
    currentArr.push(movie);
  });
  return (
    <>
      <Text style={{ color: "white" }}> {title} </Text>
      <FlatList
        horizontal
        data={list.list}
        renderItem={({ item }) => (
          <>
            <Movie
              title={item.title}
              id={item.id}
              poster_path={item.poster_path}
            />
          </>
        )}
      />
    </>
  );
};

export default List;
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUpcoming } from "../functions/getUpcoming";
import { getTopRated } from "../functions/getTopRated";
import Movie from "../components/Movie";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchApi();
  }, []);

  const searchApi = async () => {
    const response = await getUpcoming();
    setData(response);

    const responseTopRated = await getTopRated();
    setResults(responseTopRated);
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "#A63446",
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Upcoming Movies</Text>
        <FlatList
          data={data}
          horizontal
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={({}) => {
                  navigation.navigate("Details", {
                    id: item.item.id,
                    item: item.item,
                    backdrop_path: item.item.backdrop_path,
                    poster_path: item.item.poster_path,
                  });
                }}
              >
                <Movie
                  title={item.item.title}
                  id={item.item.id}
                  poster_path={item.item.poster_path}
                  navigation={navigation}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.title}>Top Rated Movies</Text>
        <FlatList
          data={results}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.item.id,
                    item: item.item,
                    backdrop_path: item.item.backdrop_path,
                    poster_path: item.item.poster_path,
                  });
                }}
              >
                <Movie
                  title={item.item.title}
                  id={item.item.id}
                  poster_path={item.item.poster_path}
                  navigation={navigation}
                  backdrop_path={item.item.backdrop_path}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 500,
    borderBottomWidth: 2,
    width: 235,
  },
  container: {
    marginHorizontal: 4,
  },
});
export default HomeScreen;

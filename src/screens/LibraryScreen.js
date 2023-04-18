import React, { useState } from "react";
import { Pressable } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, ButtonGroup, Input, Overlay } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { create, remove, empty } from "../features/listSlice";
import List from "../components/List";
import Movie from "../components/Movie";

const LibraryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [listName, setListName] = useState("ss");

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const allLists = useSelector((state) => state.list);
  console.log(allLists);
  const listNames = Object.keys(allLists);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(26,34,45,1)",
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Your Lists: </Text>
          <Button
            title="+"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={() => toggleOverlay()}
          />
        </View>
        <View>
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Input
              placeholder="Name of the list"
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              onChangeText={(value) => {
                setListName(value);
                return value;
              }}
            />
            <Button
              title={"Confirm"}
              onPress={() => {
                dispatch(create({ type: "create", title: listName }));
                toggleOverlay();
              }}
            />
          </Overlay>
        </View>

        <FlatList
          data={Object.keys(allLists)}
          renderItem={({ item }) => {
            console.log(item);
            const list = allLists[item];
            return <List title={item} list={{ list }} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 500,
    borderBottomWidth: 2,
    width: 235,
    color: "white",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "red",
    borderWidth: 2,
    marginTop: 10,
  },
  inputContainer: {
    width: 200,
  },
  input: {
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "rgb(44,54,66)",
    width: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
  },
});

export default LibraryScreen;

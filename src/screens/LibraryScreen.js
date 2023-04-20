import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button, Input, Overlay } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../features/listSlice";
import List from "../components/List";

const LibraryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [listName, setListName] = useState("ss");

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const allLists = useSelector((state) => state.list);
  const listNames = Object.keys(allLists);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b5838d" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Lists</Text>
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
        style={{ marginHorizontal: 4 }}
        renderItem={({ item }) => {
          const list = allLists[item];

          if (allLists[item].length < 1) {
            return (
              <Text
                style={styles.titleEmpty}
              >{`The list : ${item} is empty`}</Text>
            );
          } else {
            return (
              <List
                title={item}
                list={{ list }}
                navigation={navigation}
                currentList={item}
              />
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 500,
    borderBottomWidth: 2,
    width: 235,
    height: 30,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  titleEmpty: {
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 500,
    borderBottomWidth: 2,
    width: 250,
    height: 30,
    color: "red",
    backgroundColor: "grey",
    alignSelf: "flex-start",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    height: 45,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
  },
});

export default LibraryScreen;

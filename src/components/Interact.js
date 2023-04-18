import React, { useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import COLORS from "../constants/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/listSlice";
import { Overlay, Input, Button } from "react-native-elements";
import { Dialog } from "react-native-elements";
import { CheckBox } from "react-native-elements";

const Interact = ({ id, title, poster_path }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [diaVisible, setDiaVisible] = useState(false);
  const [checked, setChecked] = useState(1);
  const [checkedTitle, setCheckedTitle] = useState("");
  const allLists = useSelector((state) => state.list);

  const listNames = Object.keys(allLists);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleDialog = () => {
    setDiaVisible(!diaVisible);
  };

  console.log("render chkdtitle is", checkedTitle);
  return (
    <View style={styles.container}>
      <Button
        title="Favorite"
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
      <Button
        title="Bookmark"
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
      <Button
        title="Watched"
        buttonStyle={styles.button}
        titleStyle={styles.title}
      />
      {/* <Button
        title="Add to List"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => {
          dispatch(
            add({ type: "add", id, title, poster_path, list: { checkedTitle } })
          );
          toggleOverlay();
        }}
      /> */}
      <Dialog isVisible={diaVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="Choose List" />
        {listNames.map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => {
              setChecked(i + 1);
              setCheckedTitle(l);
              console.log("checked title is ", checkedTitle);
            }}
          />
        ))}

        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              dispatch(
                add({
                  type: "add",
                  id,
                  title,
                  poster_path,
                  list: { checkedTitle },
                })
              );
              toggleDialog();
            }}
          />
          <Dialog.Button title="CANCEL" onPress={toggleDialog} />
        </Dialog.Actions>
      </Dialog>
      <Button
        title="Add to List"
        onPress={toggleDialog}
        buttonStyle={styles.button}
      />
      {/* modal for the user to choose which list to add the movie to */}
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
              // dispatch(create({ type: "create", title: listName }));
              toggleOverlay();
            }}
          />
        </Overlay>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: COLORS.pinkish,
    borderRadius: 8,
    borderColor: COLORS.light_blue,
    borderWidth: 1,
  },
  title: {
    fontWeight: "700",
  },
});

export default Interact;

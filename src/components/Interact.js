import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../constants/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../features/listSlice";
import { Button, Dialog, CheckBox } from "react-native-elements";
import { StackActions } from "@react-navigation/native";

const Interact = ({
  id,
  title,
  poster_path,
  currentList,
  navigation,
  rmButton,
}) => {
  const dispatch = useDispatch();
  const [diaVisible, setDiaVisible] = useState(false);
  const [checked, setChecked] = useState(0);
  const [checkedTitle, setCheckedTitle] = useState("");
  const allLists = useSelector((state) => state.list);
  const popAction = StackActions.pop(1);
  const listNames = Object.keys(allLists);

  const toggleDialog = () => {
    setDiaVisible(!diaVisible);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Favorite"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => {
          dispatch(
            add({
              type: "add",
              id,
              title,
              poster_path,
              checkedTitle: "Favorites",
            })
          );
        }}
      />

      <Button
        title="Watched"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => {
          dispatch(
            add({
              type: "add",
              id,
              title,
              poster_path,
              checkedTitle: "Watched",
            })
          );
        }}
      />

      {rmButton ? (
        <Button
          title="Remove"
          buttonStyle={styles.button}
          titleStyle={styles.title}
          onPress={() => {
            dispatch(
              remove({
                type: "remove",
                id,
                title,
                currentList,
              })
            );
            navigation.dispatch(popAction);
          }}
        />
      ) : null}

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
                  checkedTitle,
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
    backgroundColor: "#B5446E",
    borderRadius: 8,
    borderColor: COLORS.light_blue,
    // borderWidth: 1,
  },
  title: {
    fontWeight: "700",
  },
});

export default Interact;

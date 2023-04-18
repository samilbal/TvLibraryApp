import React from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import COLORS from "../constants/COLORS";
import { useDispatch } from "react-redux";
import { add } from "../features/listSlice";

const Interact = ({ id, title, poster_path }) => {
  const dispatch = useDispatch();

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
      <Button
        title="Add to List"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => {
          dispatch(add({ type: "add", id, title, poster_path }));
        }}
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

import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { create, empty } from "../features/listSlice";

const AccountScreen = ({ navigation }) => {
  const lists = useSelector((state) => state.list);

  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffcdb2",
      }}
    >
      <Text>Account Screen</Text>
      <Button
        title="Go to home screen"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="create list"
        onPress={() => {
          dispatch(create({ type: "create", title: "canım_hanımım" }));
        }}
      />
      <Button
        title="clg lists"
        onPress={() => {
          console.log(lists);
        }}
      />
      <Button
        title="empty list"
        onPress={() => {
          dispatch(empty());
        }}
      />
    </View>
  );
};

export default AccountScreen;

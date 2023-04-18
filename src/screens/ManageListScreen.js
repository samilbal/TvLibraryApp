import React from "react";
import { View } from "react-native";
import { Input, Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const ManageListScreen = () => {
  return (
    <SafeAreaView>
      <Text>Name for the list :</Text>
      <Input />
    </SafeAreaView>
  );
};

export default ManageListScreen;

import React from "react";
import LibraryScreen from "../screens/LibraryScreen";
import DetailScreen from "../screens/DetailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageListScreen from "../screens/ManageListScreen";

const LibraryStack = createNativeStackNavigator();

const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryStack.Screen name="LibraryScreen" component={LibraryScreen} />
      <LibraryStack.Screen name="Details" component={DetailScreen} />
      <LibraryStack.Screen
        name="ManageListScreen"
        component={ManageListScreen}
      />
    </LibraryStack.Navigator>
  );
};

export default LibraryStackScreen;

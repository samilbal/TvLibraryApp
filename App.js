import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import AccountScreen from "./src/screens/AccountScreen";
import LibraryStackScreen from "./src/navigators/LibraryStackScreen";
import HomeStackScreen from "./src/navigators/HomeStackScreen";

import { Provider } from "react-redux";
import store from "./src/storage/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const MainTab = createMaterialBottomTabNavigator();
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainTab.Navigator
            initialRouteName="LibraryStack"
            activeColor="black"
            // shifting
            barStyle={{ backgroundColor: "#441515" }}
            inactiveColor="white"
            labeled={false}
          >
            <MainTab.Screen
              name="HomeStack"
              component={HomeStackScreen}
              options={{
                tabBarIcon: ({ color }) => {
                  return <Feather name="home" size={24} color={color} />;
                },
              }}
            />
            <MainTab.Screen
              name="LibraryStack"
              component={LibraryStackScreen}
              options={{
                tabBarIcon: ({ color }) => {
                  return (
                    <Ionicons
                      name="ios-library-outline"
                      size={24}
                      color={color}
                    />
                  );
                },
              }}
            />
            <MainTab.Screen
              name="Account"
              component={AccountScreen}
              options={{
                tabBarIcon: ({ color }) => {
                  return <AntDesign name="user" size={24} color={color} />;
                },
              }}
            />
          </MainTab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

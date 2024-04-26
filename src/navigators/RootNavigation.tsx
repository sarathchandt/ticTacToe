import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { RootStackParamList } from "../lib/types";
import Home from "../pages/Home";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import tw from "../lib/tailwindConfig";
import { useAppColorScheme } from "twrnc";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import NameEnter from "@/pages/NameEnter";
import Game from "@/pages/Game";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();



  return (
    <>
     
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="nameEnter" component={NameEnter} />
        <Stack.Screen name="game" component={Game} />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigation;

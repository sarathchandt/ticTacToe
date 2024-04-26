import { Text, TouchableOpacity, View } from "react-native";
import tw from "./src/lib/tailwindConfig";
import { useDeviceContext, useAppColorScheme } from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigators/RootNavigation";
import React from "react";

export default function App() {


  return (
    <View style={tw`flex-1 pt-7 bg-white dark:bg-black`}>
     

      <NavigationContainer>
        <RootNavigation key={tw.memoBuster} />
      </NavigationContainer>
    </View>
  );
}

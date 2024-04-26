import React, { useRef } from "react";
import { RootStackNavigationProp } from "../lib/types";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import tw from "../lib/tailwindConfig";
import Container from "../components/Container";
import { useAppColorScheme, useDeviceContext } from "twrnc";

const Home: React.FC<RootStackNavigationProp<"home">> = ({navigation}) => {
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: `dark`,
  });
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);
  return (
    <Container extraStyles="bg-white dark:bg-black p-6 ">
       <TouchableOpacity
        style={tw``}
        onPress={() => {
          console.log("darkMode");
          toggleColorScheme();
        }}
      >
        <Text style={tw`text-black dark:text-white`}>darkMode</Text>
      </TouchableOpacity>
      <View style={tw`flex-row   gap-6 h-screen`}>
        <View style={tw`w-6/12 m-auto`}>
          <Pressable style={tw`m-auto`} onPress={()=>{navigation.push('nameEnter')} }>
            <Image
              style={tw`w-[100px] h-[100px] rounded-full border-[1px] border-gray-500 `}
              source={require("@/../assets/homeScreenIcons/OffLine.jpg")}
            />
            <Text style={tw`font-semibold mx-auto my-4 dark:text-white `} >Offline Match</Text>
          </Pressable>
        </View>
        <View style={tw`w-6/12 m-auto`}>
          <View style={tw`m-auto`}>
            <Image
              style={tw`w-[100px] h-[100px] rounded-full border-[1px] border-gray-500 `}
              source={require("@/../assets/homeScreenIcons/Online.jpg")}
            />
            <Text style={tw`font-semibold mx-auto my-4 dark:text-white `} >Online Match</Text>
         
          </View>
        </View>
      </View>

    </Container>
  );
};

export default Home;

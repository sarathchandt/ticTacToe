import Container from "@/components/Container";
import tw from "@/lib/tailwindConfig";
import { RootStackNavigationProp } from "@/lib/types";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const NameEnter: React.FC<RootStackNavigationProp<"nameEnter">> = ({
  navigation,
}) => {
  const [name, setName] = useState<string>("");
  const [name2, setName2] = useState<string>("");
  const [showErrorMess, setShowErrorMess] = useState<boolean>(false);

  const next =()=>{
    if(name.length>0 && name2.length>0){
      navigation.push('game',{
        name1:name,
        name2:name2
      })
    }else{
        setShowErrorMess(true)
    }

  }

  return (
    <Container extraStyles="bg-white dark:bg-black p-6 ">
        {showErrorMess && <Text style={tw`text-red-500 mx-auto my-4 dark:text-white `}>Please Enter Both Names</Text>}
      <View style={tw`my-auto`}>
        <Text style={tw` mx-auto my-4 dark:text-white `}>
          Enter Player 1 Name
        </Text>
        <TextInput
          onChangeText={(e) => {
            setName(e);
          }}
          style={tw`border-[1px] rounded-full border-gray-500 px-6 dark:text-white mb-6`}
          placeholderTextColor={``}
          placeholder="XXXXX"
        />
        <Text style={tw` mx-auto my-4 dark:text-white `}>
          Enter Player 2 Name
        </Text>
        <TextInput
          onChangeText={(e) => {
            setName2(e);
          }}
          style={tw`border-[1px] rounded-full border-gray-500 px-6 dark:text-white `}
          placeholderTextColor={``}
          placeholder="XXXXX"
        />
        <View style={tw`flex-row justify-center`}>
          <TouchableOpacity style={tw`border-[1px] my-5 dark:border-gray-500  bg-black rounded-full`} onPress={next} >
            <Text style={tw`mx-auto my-2 mx-10 font-semibold text-white `}>Begin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default NameEnter;

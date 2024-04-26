import React, { ChildContextProvider, PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "../lib/tailwindConfig";

type ContainerProps = {
  extraStyles?: string;
};
const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
    children,
  extraStyles = "",
}) => {
  return <View style={tw`flex-1 ${extraStyles} `}>
    {children}
  </View>;
};

export default Container;

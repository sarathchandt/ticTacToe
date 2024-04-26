import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  nameEnter:undefined;
    home: undefined;
    game:{
      name1:string;
     name2:string;
    }
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

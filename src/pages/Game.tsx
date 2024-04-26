import Container from "@/components/Container";
import tw from "@/lib/tailwindConfig";
import { RootStackNavigationProp } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import P1 from "@/../assets/homeScreenIcons/P1.svg";
import P2 from "@/../assets/homeScreenIcons/P2.svg";
import ConfettiCannon from 'react-native-confetti-cannon';


const Game: React.FC<RootStackNavigationProp<"game">> = ({
  navigation,
  route,
}) => {
  const { width } = useWindowDimensions();
  const [winner, setWinner] = useState<string>(`${route.params.name1}'s turn`);
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
  const [lastSelectedIIndex, setLastSelectedIIndex] = useState<number>(0);
  const [lastSelectedJIndex, setLastSelectedJIndex] = useState<number>(0);
  const [checkingMatrix, setCheckingMatrix] = useState<any>();
  const [isUser1Turn, setIsUser1Turn] = useState<boolean>(true);
  const confetttiRef = useRef<any>(null)

  useEffect(() => {
    setCheckingMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  }, []);
  useEffect(() => {
    const checkingFunction = () => {
      const tempData = [...checkingMatrix];

      if (
        tempData[lastSelectedIIndex][0] == tempData[lastSelectedIIndex][1] &&
        tempData[lastSelectedIIndex][1] == tempData[lastSelectedIIndex][2]
      ) {
        setWinner(
          `winner is ${!isUser1Turn ? route.params.name1 : route.params.name2}`
        );
        setIsGameEnd(true)
        confetttiRef?.current?.start()
        return;
      }
      if (
        tempData[0][lastSelectedJIndex] == tempData[1][lastSelectedJIndex] &&
        tempData[1][lastSelectedJIndex] == tempData[2][lastSelectedJIndex]
      ) {
        setWinner(
          `winner is ${!isUser1Turn ? route.params.name1 : route.params.name2}`
        );
        setIsGameEnd(true)
        confetttiRef?.current?.start()
        return;
      }
      if (
        tempData[0][0] == tempData[1][1] &&
        tempData[1][1] == tempData[2][2]
      ) {
        setWinner(
          `winner is ${!isUser1Turn ? route.params.name1 : route.params.name2}`
        );
        setIsGameEnd(true)
        confetttiRef?.current?.start()
        return;
      }
      if (
        tempData[0][2] == tempData[1][1] &&
        tempData[1][1] == tempData[2][0]
      ) {
        setWinner(
          `winner is ${!isUser1Turn ? route.params.name1 : route.params.name2}`
        );
        setIsGameEnd(true)
        confetttiRef?.current?.start()
        return;
      }
      if (isUser1Turn) {
        setWinner(`${route.params.name1}'s turn`);
        return;
      } else {
        setWinner(` ${route.params.name2}'s turn`);
        return;
      }
    };
    if (checkingMatrix?.length > 0) {
      checkingFunction();
    }
  }, [isUser1Turn]);

  const [multiDimetionalArray, setMultiDimetionalArray] = useState<any>([
    [
      "bg-secondary dark:bg-darkModeSecondary",
      "bg-secondary dark:bg-darkModeSecondary",
      "bg-secondary dark:bg-darkModeSecondary",
    ],
    [
      "bg-secondary dark:bg-darkModeSecondary",
      "bg-secondary dark:bg-darkModeSecondary",
      "bg-secondary dark:bg-darkModeSecondary",
    ],
    [
      "bg-secondary dark:bg-darkModeSecondary",
      "bg-secondary dark:bg-darkModeSecondary",
      "bg-secondary dark:bg-darkModeSecondary",
    ],
  ]);

  const selectAbutton = (i: number, j: number) => {
    if (isUser1Turn) {
      setMultiDimetionalArray((pre: any) => {
        const temp = [...pre];
        temp[i][j] =
          "bg-backgroundP1 dark:bg-darkModeBackgroundP1 border-[1px] border-borderBlueP1 dark:border-darkBorderBlueP1 p1";
        return temp;
      });

      setCheckingMatrix((pre: any) => {
        let tempData = [...pre];
        tempData[i][j] = "p1";
        return tempData;
      });
      setLastSelectedIIndex(i);
      setLastSelectedJIndex(j);
    } else {
      setMultiDimetionalArray((pre: any) => {
        const temp = [...pre];
        temp[i][j] =
          "bg-backgroundP2 dark:bg-darkModeBackgroundP2 border-[1px] border-boderRedP2 dark:border-darkBorderRedP2 p2";
        return temp;
      });

      setCheckingMatrix((pre: any) => {
        let tempData = [...pre];
        tempData[i][j] = "p2";
        return tempData;
      });
      setLastSelectedIIndex(i);
      setLastSelectedJIndex(j);
    }

    setIsUser1Turn(!isUser1Turn);
  };



  return (
    <Container extraStyles="bg-white dark:bg-black p-6 ">
      <Text style={tw`text-black dark:text-white text-center uppercase`}>
        {winner}
      </Text>

      <View style={tw`my-auto`}>
        {multiDimetionalArray.map((_data: any, i: number) => {
          return (
            <View style={tw` w-full gap-2 flex-row justify-between mb-5`}>
              {_data.map((styleData: any, j: any) => {
                return (
                  <Pressable
                    style={[
                      tw`w-[${(width - 100) / 3}px] h-[${
                        (width - 100) / 3
                      }px] ${styleData} `,
                    ]}
                    onPress={() => {
                      styleData.length == 38 && !isGameEnd && selectAbutton(i, j);
                    }}
                  >
                    {styleData.slice(styleData.length - 2, styleData.length) ==
                      "p1" && <P1 style={tw`m-auto`} />}
                    {styleData.slice(styleData.length - 2, styleData.length) ==
                      "p2" && <P2 style={tw`m-auto`} />}
                  </Pressable>
                );
              })}
            </View>
          );
        })}
      </View>
      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity
          style={tw`border-[1px] my-5 dark:border-gray-500  bg-black rounded-full`}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={tw`mx-auto my-2 mx-10 font-semibold text-white `}>
            Quit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`border-[1px] my-5 dark:border-gray-500  bg-black rounded-full`}
          onPress={() => {
            navigation.replace("game", {
              name1: route.params.name1,
              name2: route.params.name2,
            });
          }}
        >
          <Text style={tw`mx-auto my-2 mx-10 font-semibold text-white `}>
            Restart
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Game;

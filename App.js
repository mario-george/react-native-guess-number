import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import * as SplashScreen from "expo-splash-screen";
/* 
!important
DONT MARK INVALID FILES TO BE SCANNED BY NATIVEWIND
run expo start -c
-c cleans the cache made by nativewind so that the routes can be updated according to the contents array
also it is recommended to use npx expo instead

*/
export default function App() {
  const [value, setValue] = useState();
  const [renderedScreen, setRenderedScreen] = useState("StartGame");
  const [fontsLoaded] = useFonts({
    montserratItalic: require("./assets/fonts/Monsterrat/Montserrat-Italic-VariableFont_wght.ttf"),
    montserrat: require("./assets/fonts/Monsterrat/Montserrat-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    const loaded = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    };
    loaded();
  }, [fontsLoaded]);
  let screen = <StartGame setValue={setValue} />;
  if (value) {
    screen = (
      <Game choosenNumber={value} setRenderedScreen={setRenderedScreen} />
    );
  }
  console.log(renderedScreen);
  if (renderedScreen == "GameOver") {
    screen = <GameOver />;
  }
  if (!fontsLoaded) {
    return <View className="bg-white" />;
    // splash screen
  }
  return (
    // rgb(245,158,11)
    <LinearGradient colors={["rgb(245,158,11)", "#ff0000"]} className="flex-1">
      <ImageBackground
        className="flex-1"
        imageStyle={{ opacity: 0.15 }}
        resizeMode="cover"
        source={require("./assets/images/dice.jpg")}
      >
        <SafeAreaView className="flex-1 pt-12">{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

/* 
by default View only takes as much space as they need so thats why i needed to add flex-1  */
/* 
for free images visit unsplash i searched for dice
*/
/* 
        resizeMode="cover"
will not distort the image but it will zoom in or out to match the screen
*/
/* 
using in TextInput keyboardType="number-pad" will always be the input of type string so i can manage
the state with a string to reset it
*/

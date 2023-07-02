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
  ImageBackground,
} from "react-native";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [value, setValue] = useState();

  let screen = <StartGame setValue={setValue} />;
  if (value) {
    screen = <Game />;
  }
  return (
    // rgb(245,158,11)
    <LinearGradient colors={["rgb(245,158,11)", "#ff0000"]} className="flex-1">
      <ImageBackground
        className="flex-1"
        imageStyle={{ opacity: 0.15 }}
        resizeMode="cover"
        source={require("./assets/images/")}
      >
        {screen}
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

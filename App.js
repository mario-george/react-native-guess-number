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
} from "react-native";
import StartGame from "./screens/StartGame";
import { useState } from "react";

export default function App() {
  return (
    <View className="flex-1 bg-[#ffad15]">
      <StartGame />
    </View>
  );
}


/* 
by default View only takes as much space as they need so thats why i needed to add flex-1  */
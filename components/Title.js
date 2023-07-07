import { View, Text, StyleSheet } from "react-native";
import Colors from "./colors";
const Title = ({ children, textStyle, viewStyle }) => {
  // style can take an array and will parse from left to right

  return (
    <View className="border-white border-2  font-bold py-4 px-12 mb-4 mt-4 ">
      <Text
        className={` text-white text-center text-4xl ${textStyle}`}
        style={StyleSheet.create({
          fontFamily: "montserrat",
        })}
      >
        {children}
      </Text>
    </View>
  );
};
export default Title;

import Colors from "./colors";
import { View, TextInput, Text } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View className={`border-4 border-[${Colors.color2}] p-24 m-4 rounded-lg`}>
      <Text className={`text-[${Colors.color2}] text-3xl`}>{children}</Text>
    </View>
  );
};
export default NumberContainer;

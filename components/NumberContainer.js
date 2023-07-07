import Colors from "./colors";
import { View, TextInput, Text } from "react-native";

const NumberContainer = ({ children ,textStyle,viewStyle }) => {
  return (
    <View className={`border-4 bg-gray-600 border-amber-400 px-8 py-6 items-center justify-center  m-4 rounded-lg ${viewStyle}`}>
      <Text className={`text-amber-400 text-4xl text-center font-montserrat-bold ${textStyle}`} style={{fontFamily:"montserrat-bold"}}>{children}</Text>
    </View>
  );
};
export default NumberContainer;

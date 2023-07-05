import { View, Text } from "react-native";
import Colors from "./colors";
const Title = ({ children }) => {
  return (
    <View className="border-white border-2  font-bold p-6 ">
      <Text className={`font-bold text-white text-center`}>{children}</Text>
    </View>
  );
};
export default Title;

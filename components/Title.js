import { View, Text } from "react-native";
import Colors from "./colors";
const Title = ({ children }) => {
  return (
    <View>
      <Text
        className={`border-[#1c2094] border-2  text-[#1c2094] font-bold p-6  text-center`}
      >
        {children}
      </Text>
    </View>
  );
};
export default Title;

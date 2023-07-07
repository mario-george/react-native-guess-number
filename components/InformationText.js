import { View, Text, StyleSheet } from "react-native";

const InformationText = ({ children, textFont, textClass }) => {
  return (
    <View className="items-center">
      <Text
        className={`text-center text-[#ffffff] ${textClass}`}
        style={{ fontFamily: textFont }}
      >
        {children}
      </Text>
    </View>
  );
};
export default InformationText;

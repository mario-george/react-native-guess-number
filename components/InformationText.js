import { View, Text, StyleSheet } from "react-native";

const InformationText = ({ children }) => {
  return (
    <View className="items-center">
      <Text className="text-center text-[#f2e713]">{children}</Text>
    </View>
  );
};
export default InformationText;

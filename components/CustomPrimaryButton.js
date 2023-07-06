import { Pressable, StyleSheet } from "react-native";
import { View, TextInput, Text } from "react-native";
import Colors from "./colors";
const CustomPrimaryButton = (props) => {
  return (
    <View className="rounded-2xl overflow-hidden my-2 mx-2">
      <Pressable
        className={`bg-[#4f72e2]  shadow-lg text-lg overflow-hidden  rounded-2xl  py-2 px-10 ${props.pressableStyle} `}
        onPress={props.pressFunction}
        android_ripple={{ color: `#ffb24ef2` }}
      >
        <View className="items-center justify-center">
          <Text className="text-white text-lg">{props.children}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CustomPrimaryButton;

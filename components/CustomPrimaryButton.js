import { Pressable, StyleSheet } from "react-native";
import { View, TextInput, Text } from "react-native";

const CustomPrimaryButton = (props) => {
  return (
    <View className="rounded-2xl overflow-hidden my-2 mx-2">
      <Pressable
        className="bg-violet-500 shadow-lg text-lg overflow-hidden  rounded-2xl  py-2 px-12 "
        onPress={props.pressFunction}
        android_ripple={{ color: "#ff99009c" }}
      >
        <View className="">
          <Text className="text-white text-lg">{props.children}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CustomPrimaryButton;

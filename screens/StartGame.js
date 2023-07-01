import { View, TextInput, Text, StyleSheet } from "react-native";
import CustomPrimaryButton from "../components/CustomPrimaryButton";
const StartGame = () => {
  return (
    <View className="items-center mt-8 ">
      <View
        style={styles.shadowContainer}
        className="rounded-lg bg-[#d31010] shadow-md shadow-black/100 items-center  w-[90%] p-4"
      >
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          className="border-b-2  border-b-[#ff9900] mx-auto w-16 text-center text-3xl text-[#ff9900] pb-1 mt-4"
          // those doesn't have an effect here but for future textinputs
          autoCorrect={false}
          autoCapitalize="none"
        />
        <View className="mt-3 flex-row space-x-3 ">
          <CustomPrimaryButton>Confirm</CustomPrimaryButton>
          <CustomPrimaryButton>Cancel</CustomPrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadowContainer: {
    elevation: 12,
    shadowColor:'black',
shadowOpacity :4,
shadowOffset:4,
shadowRadius :6
  },
});
/* 
elevation is shadow for android
 shadow for ios controlled by properties :
shadowColor
shadowOpacity 
shadowOffset
shadowRadius 
*/
export default StartGame;

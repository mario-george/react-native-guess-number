import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CustomPrimaryButton from "../components/CustomPrimaryButton";
const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const resetValueHandler = () => {
    setEnteredValue("");
  };
  const confirmValueHandler = () => {
    const number = parseInt(enteredValue);
    /* isNaN is short for is Not a Number */
    /* Alert is a react native api the has methods .alert and .prompt to promt the user for entering a value and the alert is the default andorid/ios alert message */
    
    // Alert.alert() takes two strings  first is title and second is message of the alert and an array for buttons this is the default alert of android/ios\
    // the button array takes an object each one has properties to define the button the style which can have destructive /cancel /default and text and onPress 
    // example Alert.alert('title',"message",[{title,style,onPress}])
    
    if (isNaN(number) || number <= 0 || number > 99) {
      // show alert
      Alert.alert(
        "Invalid Number entered",
        "Please enter a number from 1 to 99",
        [{ text: "Okay", style: "cancel", onPress: resetValueHandler }],
    );
      return;
    }
    console.log("valid number");
    props.setValue(enteredValue)
  };
  const updateValueHandler = (text) => {
    setEnteredValue(text);
  };
  return (
    <View className="items-center mt-8 ">
      <View
        style={styles.shadowContainer}
        className="rounded-lg bg-amber-500 shadow-md shadow-black/100 items-center  w-[90%] p-4"
      >
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          className="border-b-2  border-b-amber-700 mx-auto w-16 text-center text-3xl text-amber-700 pb-1 mt-4"
          onChangeText={updateValueHandler}
          // those doesn't have an effect here but for future textinputs
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredValue}
        />
        <View className="mt-3 flex-row space-x-3 ">
          <CustomPrimaryButton pressFunction={resetValueHandler}>
            Reset
          </CustomPrimaryButton>
          <CustomPrimaryButton pressFunction={confirmValueHandler}>
            Confirm
          </CustomPrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadowContainer: {
    elevation: 12,
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: 4,
    shadowRadius: 6,
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

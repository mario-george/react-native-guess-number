import { Alert, Text, View } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import CustomPrimaryButton from "../components/CustomPrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import InformationText from "../components/InformationText";
const Game = ({ choosenNumber, setRenderedScreen }) => {
  useEffect(() => {
    const initialGuess = pickNumberBetweenMinAndMax(1, 100, choosenNumber);

    setCurrentGuess(initialGuess);
  }, []);

  const pickNumberBetweenMinAndMax = (min, max, excludedNumber) => {
    // console.log(min, max, excludedNumber);
    if (min == max) {
      return excludedNumber;
    }
    //we will execlude the first choosen number so that the computer won't win automatically
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    // Math.random generates a random number between 0 and 1 but not equal to 1
    // we add min so that if math random is 0 we don't return 0

    if (randomNumber == excludedNumber) {
      return pickNumberBetweenMinAndMax(min, max, excludedNumber);
    }

    return randomNumber;
  };
  // the max is 100 so that because we use math floor
  const [currentGuess, setCurrentGuess] = useState();
  useEffect(() => {
    if (choosenNumber == currentGuess) {
      setRenderedScreen("GameOver");
      console.log("Game Over");
    }
  }, [choosenNumber, currentGuess, setRenderedScreen]);
  // in dependencies array put all variables
  const nextGuessHandler = (higherOrLower) => {
    if (
      (higherOrLower == "-" && choosenNumber > currentGuess) ||
      (higherOrLower == "+" && choosenNumber < currentGuess)
    ) {
      Alert.alert(
        "Invalid button clicked",
        "Wrong next guess button clicked.",
        [{ text: "Cancel", style: "cancel" }]
      );
      return;
    }

    let random;
    if (higherOrLower == "-") {
      random = pickNumberBetweenMinAndMax(1, currentGuess, currentGuess);
    } else {
      random = pickNumberBetweenMinAndMax(currentGuess, 100, currentGuess);
    }
    setCurrentGuess(random);
  };

  return (
    <View className={`flex-1 m-8`}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card viewStyle={`flex-row w-full h-36 justify-between px-6`}>
        <InformationText>Higher or lower?</InformationText>
        <CustomPrimaryButton
          pressableStyle={`py-4 px-8`}
          pressFunction={nextGuessHandler.bind(this, "+")}
        >
          <Ionicons name="add" size={36} color="white" />
        </CustomPrimaryButton>
        <CustomPrimaryButton
          pressableStyle={`py-4 px-8`}
          pressFunction={nextGuessHandler.bind(this, "-")}
        >
          <Ionicons name="remove" size={36} color="white" />
        </CustomPrimaryButton>
      </Card>
    </View>
  );
};
export default Game;

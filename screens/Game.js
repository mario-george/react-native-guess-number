import { Text, View } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import CustomPrimaryButton from "../components/CustomPrimaryButton";
const Game = ({ choosenNumber }) => {
  useEffect(() => {
    const initialGuess = pickNumberBetweenMinAndMax(1, 100, choosenNumber);

    setCurrenGuess(initialGuess);
  }, []);
  const pickNumberBetweenMinAndMax = (min, max, excludedNumber) => {
    console.log(min, max, excludedNumber);
    if (min + 1 == max || min == max) {
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
  const [currentGuess, setCurrenGuess] = useState();
  const nextGuessHandler = (higherOrLower) => {
    let random;
    if (higherOrLower == "-") {
      random = pickNumberBetweenMinAndMax(1, currentGuess, currentGuess);
    } else {
      random = pickNumberBetweenMinAndMax(currentGuess, 100, currentGuess);
    }
    setCurrenGuess(random);
  };

  return (
    <View className={`flex-1 m-8`}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <CustomPrimaryButton pressFunction={nextGuessHandler}>
        +
      </CustomPrimaryButton>
      <CustomPrimaryButton pressFunction={nextGuessHandler.bind(this, "-")}>
        -
      </CustomPrimaryButton>
    </View>
  );
};
export default Game;

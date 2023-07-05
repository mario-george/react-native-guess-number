import { Text, View } from "react-native";
import Title from "../components/Title";
const Game = ({ choosenNumber }) => {
  const pickNumberBetweenMinAndMax = (min, max, excludedNumber) => {
    //we will execlude the first choosen number so that the computer won't win automatically
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (excludedNumber == excludedNumber) {
      return pickNumberBetweenMinAndMax(min, max, excludedNumber);
    }

    return randomNumber;
  };
  // const initialGuess=pickNumberBetweenMinAndMax(1,100,choosenNumber)

  return (
    <View className={`flex-1 m-8`}>
      <Title>Opponent's Guess</Title>
    </View>
  );
};
export default Game;

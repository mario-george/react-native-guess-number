import { Text, View, Image } from "react-native";
import CustomPrimaryButton from "../components/CustomPrimaryButton";
import Title from "../components/Title";
const GameOver = ({ choosenNumber, startNewGameHandler, roundsGuessed }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Title>Game Over !</Title>

      <View className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <Image
          source={require("../assets/images/win.jpg")}
          className="w-full h-full"
        />
      </View>
      <Text
        className="text-2xl text-white mt-12 mb-3 text-center mx-2 "
        style={{ fontFamily: "montserrat" }}
      >
        Your Phone Needed{" "}
        <Text
          className="text-amber-400"
          style={{ fontFamily: "montserrat-bold" }}
        >
          {roundsGuessed}
        </Text>{" "}
        rounds to guess the number
        <Text
          className="text-amber-400"
          style={{ fontFamily: "montserrat-bold" }}
        >
          {" " + choosenNumber}
        </Text>
        .
      </Text>
      <CustomPrimaryButton pressFunction={startNewGameHandler}>
        Start a New Game
      </CustomPrimaryButton>
    </View>
  );
};
export default GameOver;

/* Nested Text inherit classes from parent Text element but Text can not wrap view */

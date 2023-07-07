import { Alert, Text, View, FlatList } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import CustomPrimaryButton from "../components/CustomPrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import InformationText from "../components/InformationText";
import GuessedRound from "../components/GuessedRound";
import { v4 as uuidv4 } from "uuid";
import * as Crypto from "expo-crypto";

const Game = ({ choosenNumber, gameOverHandler }) => {
  const generateRandomBuffer = async (size) => {
    const randomBytes = await Crypto.getRandomBytesAsync(size);
    return randomBytes;
  };
  const generateUUID = async () => {
    const randomBuffer = await generateRandomBuffer(16);
    const uuid = uuidv4({ random: [...randomBuffer] });
    console.log(uuid);
    return uuid;
  };

  useEffect(() => {
    const initialGuess = pickNumberBetweenMinAndMax(1, 100, choosenNumber);

    setCurrentGuess(initialGuess);

    const updateGuessRounds = async () => {
      const uid = await generateUUID();

      setGuessRounds((prevState) => {
        return [
          { item: initialGuess, key: uid },
          ...prevState,
        ];
      });
    };
    updateGuessRounds();
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
  const [guessRounds, setGuessRounds] = useState([]);
  console.log(guessRounds);

  useEffect(() => {
    if (choosenNumber == currentGuess) {
      gameOverHandler(guessRounds.length);
    }
  }, [choosenNumber, currentGuess, gameOverHandler]);
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
    const updateGuessRounds = async () => {
      const uid = await generateUUID();

      setGuessRounds((prevState) => {
        return [
          { item: random, key: uid },
          ...prevState,
        ];
      });
    };
    updateGuessRounds();
  };

  return (
    <View className={`flex-1 m-8`}>
      <Title textStyle={`text-3xl`}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card viewStyle={` w-full h-48 mb-2`}>
        <InformationText textClass={`text-3xl text-gray-600 mb-6 mt-4`}>
          Higher or lower?
        </InformationText>
        <View className="flex-row justify-between ">
          <CustomPrimaryButton
            pressableStyle={`py-2 px-8`}
            pressFunction={nextGuessHandler.bind(this, "+")}
          >
            <Ionicons name="add" size={36} color="white" />
          </CustomPrimaryButton>
          <CustomPrimaryButton
            pressableStyle={`py-2 px-8`}
            pressFunction={nextGuessHandler.bind(this, "-")}
          >
            <Ionicons name="remove" size={36} color="white" />
          </CustomPrimaryButton>
        </View>
      </Card>
      <View className="flex-1">
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessedRound
                roundNumber={guessRounds.length - itemData.index}
                guessedNumber={itemData.item.item}
              />
            );
          }}
          scrollEnabled
        />
      </View>
    </View>
  );
};
export default Game;

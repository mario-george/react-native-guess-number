import { View, Text,StyleSheet } from "react-native";
const GuessedRound = ({ guessedNumber, roundNumber }) => {
  return (

    <View className="bg-amber-400 rounded-lg flex-row justify-between px-2 py-1 shadow-3xl my-1" style={styles.container}>
      <Text className="text-lg" style={{ fontFamily: "montserrat" }}>
        #{roundNumber}
      </Text>
      <Text className="text-lg" style={{ fontFamily: "montserrat" }}>
     Opponent's Guess:   {guessedNumber}
      </Text>
    </View>
  );
};
export default GuessedRound;

const styles = StyleSheet.create({
  container: {
    elevation: 12,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
  },
});

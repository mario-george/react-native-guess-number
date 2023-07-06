import { View, Text, StyleSheet } from "react-native";

function Card({ children ,viewStyle}) {
  return (
    <View
      style={styles.shadowContainer}
      className={`bg-[#52007d] rounded-lg  shadow-md shadow-black/100 items-center mx-auto w-[90%] p-4 ${viewStyle}`}
    >
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  shadowContainer: {
    elevation: 12,
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: 4,
    shadowRadius: 6,
  },
});
export default Card;

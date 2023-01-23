import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {
	return <Text style={styles.inputGuide}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
	inputGuide: {
		color: Colors.accent100,
		fontSize: 25,
		textAlign: "center",
	},
});

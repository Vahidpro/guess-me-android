import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
	return <Text style={[styles.inputGuide, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
	inputGuide: {
		fontFamily: "open-sans",
		color: Colors.accent100,
		fontSize: 25,
		textAlign: "center",
	},
});

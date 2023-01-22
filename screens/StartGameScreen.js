import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput />
			<PrimaryButton>Rest</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
}
export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		backgroundColor: "#72063c",
		marginHorizontal: 20,
		marginTop: 80,
		borderRadius: 25,
		color: "#fff",
		elevation: 20,
	},
	numberInput: {
		height: 50,
	},
});

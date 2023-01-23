import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}
	function resetInputHandler() {
		setEnteredNumber("");
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (chosenNumber > 99 || chosenNumber <= 0 || isNaN(chosenNumber)) {
			// Show alert
			Alert.alert(
				"Invalid number!",
				"It has to be a number between 1 and 99.",
				[{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
			);
			return;
		}
		onPickNumber(chosenNumber);
	}
	return (
		<View style={styles.inputContainer}>
			<TextInput
				onChangeText={numberInputHandler}
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCorrect={false}
				value={enteredNumber}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}
export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: Colors.primary,
		marginHorizontal: 20,
		marginTop: 80,
		borderRadius: 25,
		color: "#fff",
		elevation: 20,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		marginVertical: 8,
		fontWeight: "bold",
		color: "#ff5100",
		borderBottomColor: "#ff5100",
		borderBottomWidth: 2,
		borderRadius: 2,
		textAlign: "center",
	},
	buttonsContainer: { flexDirection: "row" },
	buttonContainer: { width: 150 },
});

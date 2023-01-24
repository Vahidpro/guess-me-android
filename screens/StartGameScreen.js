import {
	Alert,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	TextInput,
	View,
	useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
	const { width, height } = useWindowDimensions();
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
	const marginTop = height < 380 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View style={[styles.rootContainer, { marginTop: marginTop }]}>
					<Title>Guess My Number</Title>
					<Card style={styles.inputContainer}>
						<InstructionText>Input a number</InstructionText>
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
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
export default StartGameScreen;

const styles = StyleSheet.create({
	screen: { flex: 1 },
	rootContainer: {
		flex: 1,
		// marginTop: 100,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		marginVertical: 8,
		fontWeight: "bold",
		color: Colors.accent100,
		borderBottomColor: Colors.accent100,
		borderBottomWidth: 2,
		borderRadius: 2,
		textAlign: "center",
	},
	buttonsContainer: { flexDirection: "row" },
	buttonContainer: { width: 150 },
});

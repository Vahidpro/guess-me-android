import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Confirm</PrimaryButton>
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
		backgroundColor: "#09296e",
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

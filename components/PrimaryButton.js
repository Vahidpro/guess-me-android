import { StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
	return (
		<View>
			<Text style={styles.button}>{children}</Text>
		</View>
	);
}
export default PrimaryButton;

const styles = StyleSheet.create({
	button: {
		color: "white",
	},
});

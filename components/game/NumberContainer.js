import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.outerContainer}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}
export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent100,
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: Colors.accent100,
		fontSize: 36,
		fontWeight: "bold",
	},
});

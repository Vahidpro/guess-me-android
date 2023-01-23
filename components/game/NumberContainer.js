import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}
export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent100,
		padding: 8,
		margin: 24,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: Colors.accent100,
		fontSize: 80,
		fontWeight: "bold",
	},
});

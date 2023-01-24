import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		fontFamily: "open-sans-bold",
		color: Colors.oponentGuessTitle,
		textAlign: "center",
		borderWidth: 1,
		borderColor: Colors.oponentGuessTitle,
		padding: 16,
		borderRadius: 15,
		maxWidth: "80%",
	},
});

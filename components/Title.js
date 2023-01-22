import { StyleSheet, Text } from "react-native";

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "orange",
		textAlign: "center",
		borderWidth: 1,
		borderColor: "orange",
		padding: 16,
	},
});

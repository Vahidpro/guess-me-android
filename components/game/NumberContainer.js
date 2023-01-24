import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent100,
		padding: deviceWidth < 380 ? 12 : 24,
		margin: deviceWidth < 380 ? 12 : 24,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		fontFamily: "open-sans-bold",
		color: Colors.accent100,
		fontSize: 80,
		fontWeight: "bold",
	},
});

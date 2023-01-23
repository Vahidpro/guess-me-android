import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: Colors.primary,
		marginHorizontal: 20,
		marginTop: 30,
		borderRadius: 25,
		color: "#fff",
		elevation: 20,
	},
});

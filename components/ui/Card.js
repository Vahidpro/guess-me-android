import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: Colors.primary,
		marginHorizontal: 20,
		marginTop: deviceWidth < 380 ? 18 : 36,
		borderRadius: 25,
		color: "#fff",
		elevation: 20,
	},
});

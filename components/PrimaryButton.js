import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
	function pressHandler() {
		console.log("جتی");
	}
	return (
		<View style={styles.outerContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				onPress={pressHandler}
				android_ripple={{ color: "#0084b8" }}
			>
				<Text style={styles.button}>{children}</Text>
			</Pressable>
		</View>
	);
}
export default PrimaryButton;

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 25,

		margin: 5,
		elevation: 5,
		overflow: "hidden",
	},
	innerContainer: {
		backgroundColor: "#005b80",
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	button: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});

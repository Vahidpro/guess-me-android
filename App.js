import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
	return (
		<LinearGradient colors={["#060635", "#0000c0"]} style={styles.container}>
			<StatusBar style="light" />
			<StartGameScreen></StartGameScreen>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0d0d35",
	},
});

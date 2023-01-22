import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}
	return (
		<LinearGradient colors={["#060635", "#0202ce"]} style={styles.container}>
			<StatusBar style="light" />
			<ImageBackground
				style={styles.container}
				source={require("./assets/images/dices.png")}
				resizeMode="cover"
				imageStyle={styles.backgroundImage}
			>
				{screen}
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.25,
	},
});

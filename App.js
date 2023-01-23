import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameIsOver from "./screens/GameOverScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}
	function gameIsOverHandler() {
		setGameIsOver(true);
	}
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen onGameOver={gameIsOverHandler} userNumber={userNumber} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen />;
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
				<SafeAreaView style={styles.container}>{screen}</SafeAreaView>
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

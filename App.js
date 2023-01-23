import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
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
		screen = <GameScreen userNumber={userNumber} />;
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

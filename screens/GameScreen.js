import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

function GameScreen() {
	const initialGuess = generateRandomBetween(1, 100);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	function nextGuessHandler() {}
	return (
		<View style={styles.screen}>
			<Title style={styles.title}>Oponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<PrimaryButton onPress={nextGuessHandler}>+</PrimaryButton>
					<PrimaryButton onPress={nextGuessHandler}>-</PrimaryButton>
				</View>
			</View>
			<View></View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 40,
	},
	title: {},
});

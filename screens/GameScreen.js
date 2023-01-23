import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useEffect, useState } from "react";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Title from "../components/ui/Title";
import { FontAwesome } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		if (currentGuess === userNumber) onGameOver();
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "greater" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "you know that this is wrong...", [
				{
					text: "Sorry",
					style: "cancel",
				},
			]);
			return;
		}
		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		console.log(minBoundary, maxBoundary);
		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRndNumber);
		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
	}
	return (
		<View style={styles.screen}>
			<Title>Oponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.InstructionText}>
					Higher or lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
							<FontAwesome name="minus" size={24} color="white" />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
							<FontAwesome name="plus" size={24} color="white" />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View>
				{/* {guessRounds.map((guessRound) => (
					<Text key={guessRound}>{guessRound}</Text>
				))} */}

				<FlatList
					data={guessRounds}
					renderItem={(itemData) => <Text>{itemData.item}</Text>}
					keyExtractor={(item) => item}
				></FlatList>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 40,
	},
	inputAsk: {
		color: Colors.question,
		fontSize: 25,
		textAlign: "center",
		marginBottom: 20,
	},
	InstructionText: {
		marginBottom: 12,
	},
	buttonsContainer: { flexDirection: "row" },
	buttonContainer: { width: 150 },
});

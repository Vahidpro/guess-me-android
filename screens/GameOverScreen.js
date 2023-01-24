import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}
	if (height < 450) {
		imageSize = 80;
	}
	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};
	return (
		<View style={styles.rootContainer}>
			<Title>Game is over</Title>
			<View style={[styles.imageContainer, imageStyle]}>
				<Image
					style={styles.image}
					source={require("../assets/images/success.png")}
				></Image>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
				rounds to guess the number{" "}
				<Text style={styles.highlight}>{userNumber}</Text>.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
		</View>
	);
}

export default GameOverScreen;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		// width: deviceWidth < 380 ? 150 : 300,
		// height: deviceWidth < 380 ? 150 : 300,
		// borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.accent800,
		overflow: "hidden",
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 28,
		textAlign: "center",
		marginVertical: 24,
	},
	highlight: {
		fontFamily: "open-sans-bold",
		color: Colors.accent500,
	},
});

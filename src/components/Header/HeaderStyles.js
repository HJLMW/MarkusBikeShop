import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
	root: {
		padding: 20,
		flexDirection: "row",
		backgroundColor: COLORS.PRIMARY,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		color: "white",
		width: "100%",
		textAlign: "center",
	},
	image: {
		height: 75,
		position: "absolute",
		left: -40
	}
});

export default styles;
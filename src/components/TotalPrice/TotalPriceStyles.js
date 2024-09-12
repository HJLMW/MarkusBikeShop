import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: COLORS.PRIMARY,
		position: "absolute",
		bottom: 0,
		right: 20,
		borderRadius: 100,
		shadowColor: "#bbb",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.8,
		shadowRadius: 10.00,
		elevation: 24,
		backgroundColor: COLORS.PRIMARY
	},
	text: {
		fontSize: 20,
		color: "white"
	},
	bold: {
		fontWeight: "bold"
	}
});

export default styles;
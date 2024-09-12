import { ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
	root: {
		padding: 20
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: COLORS.TEXT_TITLE,
		paddingBottom: 10
	},
	description: {
		paddingBottom: 20,
		fontSize: 18
	},
	scrollView: {
		marginBottom: 40,
		overflow: "visible",
	},
	item: {
		marginRight: 10,
		borderRadius: 10,
		shadowColor: "#bbb",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.8,
		shadowRadius: 10.00,
		elevation: 24,
		padding: 10,
		backgroundColor: "white"
	},
	itemSelected: {
		marginRight: 10,
		borderRadius: 10,
		shadowColor: "#bbb",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.8,
		shadowRadius: 10.00,
		elevation: 24,
		padding: 10,
		backgroundColor: COLORS.PRIMARY
	},
	itemText: {
		fontSize: 18,
		fontWeight: "bold",
		color: COLORS.TEXT_TITLE
	},
	itemTextSelected: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white"
	},
	itemPrice: {
		fontSize: 14,
		fontWeight: "bold",
		color: COLORS.TEXT_TITLE
	},
	itemPriceSelected: {
		fontSize: 14,
		color: "white"
	}
});

export default styles;
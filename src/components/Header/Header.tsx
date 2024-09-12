import { Image, Text, View } from "react-native";
import styles from "./HeaderStyles";

/**
 * Header component for the application.
 */
export default function Header() {
	return (
		<View style={styles.root}>
			<Image source={require("../../assets/images/bike.png")} resizeMode="contain" style={styles.image} />
			<Text style={styles.title}>Markus' Bike Shop</Text>
		</View>
	)
}

import { SafeAreaView, Text, View } from "react-native";
import styles from "./TotalPriceStyles";

interface TotalPriceProps {
	total: number
}

/**
 * Component used to show the total price of the shop.
 */
export default function TotalPrice({ total }: TotalPriceProps) {
	return (
		<View style={styles.root}>
			<Text style={styles.text}><Text style={styles.bold}>Total:</Text> {total}€</Text>
		</View>
	)
}
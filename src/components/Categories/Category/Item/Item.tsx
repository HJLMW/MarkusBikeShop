import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./ItemStyles";
import { BikeItem } from "../../../../types/bike";

/**
 * Props types for the Item component.
 */
interface ItemProps {
	item: BikeItem,
	isSelected: boolean,
	rules: {
		forbidden: boolean,
		price: number | null,
	},
	handlePartPressed: (item: BikeItem) => void
}

/**
 * Item component for displaying a bike item with selection and rules handling.
 * 
 * This component renders an item with its name, image (if available), and price. The item's appearance
 * changes based on whether it is selected or forbidden. It also handles item selection through the 
 * `handlePartPressed` callback. The price of the item is determined based on rules or the item's default price.
 */
export default function Item({ rules, item, isSelected, handlePartPressed }: ItemProps) {

	const price = rules.price ? rules.price : item.price;
	const isDisabled = rules.forbidden;

	return (
		<TouchableOpacity
			disabled={isDisabled}
			style={isDisabled ? styles.itemDisabled : isSelected ? styles.itemSelected : styles.item}
			onPress={() => handlePartPressed(item)}
		>
			<Text style={isSelected ? styles.itemTextSelected : styles.itemText}>
				{item.name}
			</Text>
			{item.image && <Image style={styles.image} source={item.image} resizeMode="cover" />}
			<Text style={isSelected ? styles.itemPriceSelected : styles.itemPrice}>
				{price}€
			</Text>
		</TouchableOpacity>
	)
}

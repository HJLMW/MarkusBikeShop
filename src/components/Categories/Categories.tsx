import { ScrollView, Text, View } from "react-native";
import styles from "./CategoriesStyle";
import Category from "./Category/Category";
import { bikeParts } from "../../constants/options";
import { BikeItem, BikePart, BikePartsEnum } from "../../types/bike";
import { Cart } from "../../types/cart";

/**
 * Props types for the Categories component.
 */
interface CategoriesProps {
	cart: Cart,
	handlePartPressed: (partType: BikePartsEnum, item: BikeItem) => void
}

/**
 * Categories component for displaying and selecting bike parts (a section in the shop).
 * 
 * This component renders a scrollable list of categories, where each category is represented 
 * by the `Category` component. It uses the `cart` and `handlePartPressed` props to manage and 
 * respond to item part selections.
 */
export default function Categories({ cart, handlePartPressed }: CategoriesProps) {

	return (
		<ScrollView style={styles.root}>
			{
				bikeParts.map((part: BikePart, key: number) =>
					<Category
						cart={cart}
						handlePartPressed={handlePartPressed}
						key={key}
						part={part}
					/>
				)
			}
		</ScrollView>
	)
}

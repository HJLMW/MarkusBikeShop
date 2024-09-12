import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BikeItem, BikePart, BikePartsEnum } from "../../../types/bike";
import styles from "../CategoriesStyle";
import { Cart } from "../../../types/cart";
import Item from "./Item/Item";

/**
 * Props types for the Category component.
 */
interface CategoryProps {
	part: BikePart,
	cart: Cart,
	handlePartPressed: (partType: BikePartsEnum, item: BikeItem) => void
}

/**
 * Category component for displaying a bike part and its associated items.
 * 
 * This component renders the title and description of a bike part, and a horizontally scrollable list 
 * of items associated with that part. Each item can be selected, and the component handles item part selection 
 * through the `handlePartPressed` callback. It also determines if an item is selected and applies rules 
 * based on the current Rart state.
 */
export default function Category({ part, cart, handlePartPressed }: CategoryProps) {

	return (
		<View>
			<Text style={styles.title}>{part.partTitle}</Text>
			<Text style={styles.description}>{part.partDescription}</Text>
			<ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
				{
					part.items.map((item: BikeItem, key: number) => {
						const isSelected = cart[part.partType]?.name === item.name;
						const rules = getRules(cart, item.name);

						return <Item rules={rules} key={key} item={item} isSelected={isSelected} handlePartPressed={(item: BikeItem) => handlePartPressed(part.partType, item)} />;
					})
				}
			</ScrollView>
		</View>
	);
}

/**
 * Retrieves the rules for a given item based on the current cart state.
 * 
 * This function checks each item selected in the cart to determine if the given item name is subject 
 * to any forbidden rules. It returns an object indicating whether the item is forbidden and its price.
 * 
 * If the item is forbidden and it does not have a price in its rule, it means that the item must be disabled. Example, this rule:
 * {
 *	partType: BikePartsEnum.Wheels,
 *	name: Wheels["Mountain wheels"],
 * },
 * Otherwise if a rule contains a price it means the item must to update its price, but not disable it. For example, this rule:
 * {
 *	partType: BikePartsEnum.FrameFinish,
 *	name: FrameFinish["Matte"],
 *	price: 150 <---
 * }
 */
function getRules(cart: Cart, itemName: string) {
	for (const key in cart) {
		const cartItemSelected: BikeItem | null = cart[key as keyof typeof BikePartsEnum];

		if (cartItemSelected?.name && itemName.localeCompare(cartItemSelected.name) !== 0) {

			if (cartItemSelected.forbiddenRules && cartItemSelected.forbiddenRules.length > 0) {

				for (const rule of cartItemSelected.forbiddenRules) {

					// Forbidden rule
					if (itemName.localeCompare(rule.name) === 0) {
						return {
							forbidden: rule.price ? false : true,
							price: rule.price ? rule.price : null,
						};
					}
				}
			}

		}
	}

	return {
		forbidden: false,
		price: null
	};
}


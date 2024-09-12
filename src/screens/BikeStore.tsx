import { SafeAreaView } from "react-native";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import { useState } from "react";
import { bikeParts } from "../constants/options";
import { Cart } from "../types/cart";
import { BikeItem, BikePartsEnum } from "../types/bike";
import TotalPrice from "../components/TotalPrice/TotalPrice";

/**
 * BikeStore component manages the cart state and handles part selection.
 */
export default function BikeStore() {
	// Initialize the cart state with default values for each part in bikeParts
	const [cart, setCart] = useState<Cart>(
		bikeParts.reduce((acc, part) => {
			acc[part.partType] = {
				name: "",
				price: 0
			};
			return acc;
		}, {
			total: 0
		} as Cart)
	);

	/**
	 * Handles the selection of a bike part and updates the cart.
	 */
	const handlePartPressed = (partType: BikePartsEnum, item: BikeItem) => {
		setCart(prevCart => checkCartRules({ ...prevCart, [partType]: item }));
	}

	/**
	 * Checks and updates the cart rules and calculates the total price.
	 * 
	 * For each Cart part, If it's not null, then apply the rules to the rest of the Cart parts.
	 * 
	 * For example, If Cart FrameType is 'Diamond' and It has rules, if one rule is 'Mountain Wheel', then
	 * disable Cart part 'Wheel' in case 'Mountain Wheel' was selected, updating the price too.
	 */
	const checkCartRules = (cart: Cart): Cart => {
		const newCart = {...cart};
		let totalPrice = 0;

		// For each Cart part, check the rules. For each rule, check each Cart part again. 
		// If a Cart part name matches with a rule name, we need to disable that part or update the price for later.
		for (const partType in newCart) {
			const cartItemSelected: BikeItem = cart[partType as keyof typeof BikePartsEnum];

			if (cartItemSelected?.forbiddenRules) {
				for (const rule of cartItemSelected.forbiddenRules) {
					for (const partType_ in newCart) { 
						if (newCart[partType_ as keyof typeof BikePartsEnum]?.name?.localeCompare(rule.name) === 0) {
							if(!rule.price) {
								newCart[partType_ as keyof typeof BikePartsEnum] = { name: "", price: 0 };
							} else {
								newCart[partType_ as keyof typeof BikePartsEnum].price = rule.price;
							}
						}
					}
				}
			}
		}

		// Calculate the total price of all Cart parts.
		for (const partType in newCart) {
			if (newCart[partType as keyof typeof BikePartsEnum]?.price) {
				totalPrice += newCart[partType as keyof typeof BikePartsEnum].price;
			}
		}

		newCart.total = totalPrice;
		return newCart;
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<Header />
			<Categories cart={cart} handlePartPressed={handlePartPressed} />
			<TotalPrice total={cart.total} />
		</SafeAreaView>
	)
}
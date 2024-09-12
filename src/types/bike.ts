import { ImageSourcePropType } from "react-native"
import { FrameFinish, FrameType } from "./frames"
import { Rim, RimColor } from "./rim"
import { Chain } from "./chain"
import { Wheels } from "./wheels"

/**
 * Enum defining the different types of bike parts available at the shop.
 */
export enum BikePartsEnum {
	FrameType = "FrameType",
	FrameFinish = "FrameFinish",
	Wheels = "Wheels",
	Rim = "Rim",
	RimColor = "RimColor",
	Chain = "Chain"
}

/**
 * Interface representing a bike part.
 * 
 * A BikePart describes a section of the store and includes:
 * - A title for the part.
 * - A description of the part.
 * - The type of the part defined by `BikePartsEnum`.
 * - A list of items (BikeItem) available for this part.
 */
export interface BikePart {
	partTitle: string,
	partDescription: string,
	partType: BikePartsEnum,
	items: BikeItem[]
}

/**
 * Interface representing a bike item.
 * 
 * A BikeItem includes:
 * - The name of the item.
 * - The price of the item.
 * - An optional image for the item.
 * - Optional forbidden rules that specify restrictions and pricing adjustments.
 */
export interface BikeItem {
	name: string,
	price: number,
	image?: ImageSourcePropType,
	forbiddenRules?: Array<{
		partType: BikePartsEnum,
		name: string,
		price?: number
	}>
}

import { FrameFinish, FrameType } from "../types/frames";
import { Rim, RimColor } from "../types/rim";
import { BikePart, BikePartsEnum } from "../types/bike";
import { Wheels } from "../types/wheels";
import { Chain } from "../types/chain";

// FrameType images
const frameTypeImages = {
	diamond: require("../assets/images/frames/diamond.png"),
	fullSuspension: require("../assets/images/frames/full-suspension.png"),
	stepThrough: require("../assets/images/frames/step-through.png")
}

// Wheels images
const wheelsImages = {
	fat: require("../assets/images/wheels/fat.png"),
	mountain: require("../assets/images/wheels/mountain.png"),
	road: require("../assets/images/wheels/road.png")
}

// Chain images
const chainImages = {
	multiple: require("../assets/images/chain/8.png"),
	single: require("../assets/images/chain/single.png"),
}


/**
 * Object defining the types of bikes for sale (or available sections in the store), as well as their contents.
 * 
 * When adding a new section, a new product, or a new rule, everything is contained within the semantics of this object,
 * without needing to change any code logic.
 * 
 * Refer to the types to understand how each BikePart works, which is essentially a store section.
 * For each BikePart, a set of items (BikeItem) is included, which may in turn contain forbiddenRules.
 * 
 * 'ForbiddenRules' are rules that specify:
 * 
 * 1) Which objects CANNOT be selected if the item is active in the Cart in its corresponding part.
 *    For example, if "Diamond" is selected as FrameType in the Cart, then "Mountain wheels" cannot be selected.
 *    (Take a look at the default bikeParts definittion).
 * 
 * 2) Which objects should have their price changed if the item is active in the Cart in its corresponding part.
 *    For example, if "Diamond" is selected as FrameType in the Cart, then "Matte" changes to 150€ instead of 100€.
 * 
 * A forbiddenRule consists of:
 * 
 *   {
 *   	partType: BikePartsEnum,           	// To understand which bike part it belongs to.
 *   	name: Type within that BikePart,    // The name of the item within that part type.
 *   	price?: number                     	// OPTIONAL: If this attribute is added, it means the item is not disabled,
 *   },                                     // but its price is updated. If the attribute is added, the component will be
 *                                     	   	// disabled.
 *   
 */


export const bikeParts: BikePart[] = [
	{
		partTitle: "Frame type",
		partDescription: "Choose a frame type",
		partType: BikePartsEnum.FrameType,
		items: [
			{
				name: FrameType["Diamond"],
				price: 600,
				image: frameTypeImages.diamond,
				forbiddenRules: [
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Mountain wheels"],
					},
					{
						partType: BikePartsEnum.FrameFinish,
						name: FrameFinish["Matte"],
						price: 150
					}
				]
			},
			{
				name: FrameType["Full-suspension"],
				price: 1200,
				image: frameTypeImages.fullSuspension,
				forbiddenRules: [
					{
						partType: BikePartsEnum.RimColor,
						name: RimColor["Red"],
					},
					{
						partType: BikePartsEnum.FrameFinish,
						name: FrameFinish["Matte"],
						price: 120
					}
				]
			},
			{
				name: FrameType["Step-through"],
				price: 500,
				image: frameTypeImages.stepThrough,
				forbiddenRules: [
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Fat bike wheels"],
					},
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Mountain wheels"],
					}
				]
			}
		]
	},
	{
		partTitle: "Frame finish",
		partDescription: "Choose a frame finish",
		partType: BikePartsEnum.FrameFinish,
		items: [
			{
				name: FrameFinish["Matte"],
				price: 100,
			},
			{
				name: FrameFinish["Shiny"],
				price: 90
			},
		],
	},
	{
		partTitle: "Wheels",
		partDescription: "Choose a type of wheels",
		partType: BikePartsEnum.Wheels,
		items: [
			{
				name: Wheels["Fat bike wheels"],
				image: wheelsImages.fat,
				price: 300,
			},
			{
				name: Wheels["Mountain wheels"],
				image: wheelsImages.mountain,
				price: 250,
			},
			{
				name: Wheels["Road wheels"],
				image: wheelsImages.road,
				price: 200
			},
		],
	},
	{
		partTitle: "Rim",
		partDescription: "Choose a rim type",
		partType: BikePartsEnum.Rim,
		items: [
			{
				name: Rim["Traditional"],
				price: 50
			},
			{
				name: Rim["Tubeless"],
				price: 80,
				forbiddenRules: [
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Fat bike wheels"]
					}
				]
			},
			{
				name: Rim["Tubeless ready"],
				price: 100,
				forbiddenRules: [
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Fat bike wheels"]
					},
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Mountain wheels"]
					},
				]
			}
		],
	},
	{
		partTitle: "Rim color",
		partDescription: "Choose a rim color",
		partType: BikePartsEnum.RimColor,
		items: [
			{
				name: RimColor["Black"],
				price: 25
			},
			{
				name: RimColor["Blue"],
				price: 30
			},
			{
				name: RimColor["Red"],
				price: 30,
				forbiddenRules: [
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Fat bike wheels"]
					}
				]
			},
		]
	},
	{
		partTitle: "Chain",
		partDescription: "Choose a chain type",
		partType: BikePartsEnum.Chain,
		items: [
			{
				name: Chain["Single-speed chain"],
				image: chainImages.single,
				price: 25,
				forbiddenRules: [
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Fat bike wheels"]
					},
					{
						partType: BikePartsEnum.Wheels,
						name: Wheels["Mountain wheels"]
					},
				]
			},
			{
				name: Chain["8-speed chain"],
				image: chainImages.multiple,
				price: 30,
			},
		]
	}
] as const;
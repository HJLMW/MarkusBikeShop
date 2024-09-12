import { BikeItem } from "./bike"

/**
 * Interface representing the structure of the shopping cart in the bike store.
 * 
 * The Cart interface contains the selected items for each bike part, as well as the total price of the cart.
 * Each property corresponds to a specific part of the bike, and the value is a `BikeItem` object representing
 * the currently selected item for that part.
 *
 */

export interface Cart {
	"FrameType": BikeItem,
	"FrameFinish": BikeItem,
	"Wheels": BikeItem,
	"Rim": BikeItem,
	"RimColor": BikeItem,
	"Chain": BikeItem,
	total: number
}
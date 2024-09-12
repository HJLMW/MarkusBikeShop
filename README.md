# Markus' Bike Shop - Flexible - Customization System

Welcome to Markus' Bike Shop project! This project implements a flexible and dynamic system for managing the store sections and bike part customizations. The system allows easy modification of bike parts, their prices, and the rules that govern the selection of components.

The solution is designed to make the management of the store sections straightforward, reducing the need for code changes when adding new parts, products or rules for this products. It relies on a data-driven approach where all the necessary configurations are centralized in a well-structured data object.

## Overview of the Solution

The store system is composed of **bike parts** (e.g., frames, wheels, chains, etc.), each of which contains several **items** that can be selected by customers. Each item may also contain specific **rules** that govern what other parts/items are **NOT** compatible with it or should update its prices.

### Key Features

1. **Dynamic Parts & Sections**: Each part of the bike (Frame, Wheels, Chain, etc.) is treated as a section in the store. These sections are defined using a flexible configuration system, meaning that adding new parts or modifying existing ones can be done without changing any code logic. You only need to update the configuration object, ubicated in src/constants/options.tsx.

2. **Forbidden Rules**: For each item in a bike part, you can define rules to restrict certain item combinations. For example, if a specific frame type is selected, certain wheels may not be allowed. This is controlled through **forbiddenRules**.

3. **Dynamic Pricing**: You can define pricing rules, allowing items to adjust their price based on the selection of other components. For example, if a specific frame type is selected, the price of a matte finish might increase from 100€ to 150€.

## How It Works

The heart of the system is the `bikeParts` object, which defines each section of the store. Here is a breakdown of the structure:

```typescript
export const bikeParts: BikePart[] = [
  {
    partTitle: "Frame type", // The title of the section
    partDescription: "Choose a frame type", // The description of the section
    partType: BikePartsEnum.FrameType, // The type of the part (must match with an enum)
    items: [
      {
        name: "Diamond", // Name of the item
        price: 600, // Base price of the item
        forbiddenRules: [ // List of rules related to this item
          {
            partType: BikePartsEnum.Wheels, // Which part the rule is related to
            name: "Mountain wheels", // Which item in that part is restricted
          },
          {
            partType: BikePartsEnum.FrameFinish,
            name: "Matte",
            price: 150, // Dynamic price adjustment rule. NOTICE: Adding price, The item is not restricted, just update its price.
          }
        ]
      },
      ...
    ]
  },
  ...
];
```
## Adding New Sections and Items

To add a new section to the store (e.g., a new type of handlebar), follow the steps below to ensure proper integration with the customization system. The process is simple and involves updating the `BikePartsEnum`, the `Cart` interface, and the `bikeParts` array to include the new section.

### Steps:

### 1. **Create Enums for the New Items (Optional)**

It's recommended to create enums for the new items to avoid potential typos or mismatches when referencing them later in the code. For example:

```typescript
export enum Handlebars {
  DropBars = "Drop Bars",
  FlatBars = "Flat Bars",
}
```

### 2. Add the New Section to BikePartsEnum

To ensure that the new part type is properly recognized in the system, you need to add it to the BikePartsEnum. For example:

```typescript
export enum BikePartsEnum {
  FrameType = "FrameType",
  FrameFinish = "FrameFinish",
  Wheels = "Wheels",
  Rim = "Rim",
  RimColor = "RimColor",
  Chain = "Chain",
  Handlebars = "Handlebars" // New section added here
}
```

### 3. Update the Cart Interface

Next, you need to modify the Cart interface to account for the new part type, so that the customer can select and configure it in the shopping cart:

```typescript
export interface Cart {
  "FrameType": BikeItem,
  "FrameFinish": BikeItem,
  "Wheels": BikeItem,
  "Rim": BikeItem,
  "RimColor": BikeItem,
  "Chain": BikeItem,
  "Handlebars": BikeItem, // New section added to the cart
  total: number
}
```

### 4. Define the New Section in bikeParts

Now, you can define the new section in the bikeParts array. Make sure to follow the existing structure and include the necessary rules (forbiddenRules) where applicable. Here’s an example:

```typescript
export const bikeParts: BikePart[] = [
  {
    partTitle: "Handlebars", // Title of the new section
    partDescription: "Choose a handlebar type", // Description for the section
    partType: BikePartsEnum.Handlebars, // Must match the enum definition
    items: [
      {
        name: Handlebars.DropBars, // Use the item enum if defined
        price: 100,
        forbiddenRules: [ // Forbidden rules for this item
          {
            partType: BikePartsEnum.Wheels,
            name: Wheels["Fat bike wheels"], // Prevents selection of "Fat bike wheels"
          }
        ]
      },
      {
        name: Handlebars.FlatBars, // Another item in the section
        price: 80,
      }
    ]
  },
  // Other parts...
];
```

## Author

**Humberto Javier Lopez Molina**
**Email:** [humbertojavierlm@gmail.com](mailto:humbertojavierlm@gmail.com)
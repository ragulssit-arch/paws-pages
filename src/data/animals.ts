export interface Animal {
  id: number;
  name: string;
  category: string;
  price: number;
  features: string;
  image: string;
  inStock: boolean;
}

export const animals: Animal[] = [
  // Dogs
  {
    id: 1,
    name: "Labrador",
    category: "Dogs",
    price: 15000,
    features: "Friendly, loyal, fast learning - perfect family companion",
    image: "/images/labrador.png",
    inStock: true,
  },
  {
    id: 2,
    name: "German Shepherd",
    category: "Dogs",
    price: 18000,
    features: "Intelligent, protective, excellent guard dog",
    image: "/images/german-shepherd.png",
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Retriever",
    category: "Dogs",
    price: 20000,
    features: "Gentle, patient, great with kids",
    image: "/images/golden-retriever.png",
    inStock: false,
  },
  // Cats
  {
    id: 4,
    name: "Persian Cat",
    category: "Cats",
    price: 10000,
    features: "Fluffy, calm, elegant and affectionate",
    image: "/images/persian-cat.png",
    inStock: true,
  },
  {
    id: 5,
    name: "Siamese",
    category: "Cats",
    price: 8000,
    features: "Active, vocal, social and playful",
    image: "/images/siamese-cat.png",
    inStock: true,
  },
  {
    id: 6,
    name: "Maine Coon",
    category: "Cats",
    price: 25000,
    features: "Gentle giant, friendly, dog-like personality",
    image: "/images/maine-coon.png",
    inStock: false,
  },
  // Birds
  {
    id: 7,
    name: "Love Birds",
    category: "Birds",
    price: 2000,
    features: "Colorful, social, bond strongly with owners",
    image: "/images/love-birds.png",
    inStock: true,
  },
  {
    id: 8,
    name: "Parrot",
    category: "Birds",
    price: 5000,
    features: "Can mimic sounds, intelligent, entertaining",
    image: "/images/parrot.png",
    inStock: true,
  },
  {
    id: 9,
    name: "Cockatiel",
    category: "Birds",
    price: 3500,
    features: "Whistles tunes, affectionate, easy to train",
    image: "/images/cockatiel.png",
    inStock: true,
  },
  // Fish
  {
    id: 10,
    name: "Goldfish",
    category: "Fish",
    price: 200,
    features: "Easy to maintain, beautiful, beginner-friendly",
    image: "/images/goldfish.png",
    inStock: true,
  },
  {
    id: 11,
    name: "Fighter Fish",
    category: "Fish",
    price: 300,
    features: "Colorful, aggressive style, stunning fins",
    image: "/images/fighter-fish.png",
    inStock: true,
  },
  {
    id: 12,
    name: "Guppy",
    category: "Fish",
    price: 150,
    features: "Vibrant colors, peaceful, easy breeding",
    image: "/images/guppy.png",
    inStock: true,
  },
  // Rabbits
  {
    id: 13,
    name: "Holland Lop",
    category: "Rabbits",
    price: 4000,
    features: "Floppy ears, friendly, compact size",
    image: "/images/holland-lop.png",
    inStock: true,
  },
  {
    id: 14,
    name: "Angora Rabbit",
    category: "Rabbits",
    price: 6000,
    features: "Fluffy coat, gentle, requires grooming",
    image: "/images/angora-rabbit.png",
    inStock: false,
  },
  // Turtles
  {
    id: 15,
    name: "Red-Eared Slider",
    category: "Turtles",
    price: 1500,
    features: "Hardy, aquatic, long lifespan",
    image: "/images/red-eared-slider.png",
    inStock: true,
  },
  {
    id: 16,
    name: "Box Turtle",
    category: "Turtles",
    price: 3000,
    features: "Land dweller, unique shell, calm temperament",
    image: "/images/box-turtle.png",
    inStock: true,
  },
];

export const categories = ["All", "Dogs", "Cats", "Birds", "Fish", "Rabbits", "Turtles"];

import { Animal } from "@/data/animals";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      Dogs: "🐕",
      Cats: "🐱",
      Birds: "🦜",
      Fish: "🐠",
      Rabbits: "🐰",
      Turtles: "🐢",
    };
    return emojis[category] || "🐾";
  };

  const placeholderImage = `https://placehold.co/400x300/93c5fd/1e3a5f?text=${encodeURIComponent(animal.name)}`;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageError ? placeholderImage : animal.image}
          alt={animal.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={() => setImageError(true)}
        />
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full transition-all hover:scale-110"
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "fill-coral text-coral" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm text-foreground">
            {getCategoryEmoji(animal.category)} {animal.category}
          </Badge>
        </div>

        {/* Stock Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge
            variant={animal.inStock ? "default" : "destructive"}
            className={animal.inStock ? "bg-accent text-accent-foreground" : ""}
          >
            {animal.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground">{animal.name}</h3>
          <span className="text-lg font-bold text-primary">{formatPrice(animal.price)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{animal.features}</p>

        <Button
          variant={animal.inStock ? "default" : "outline"}
          className="w-full"
          disabled={!animal.inStock}
        >
          <ShoppingCart className="w-4 h-4" />
          {animal.inStock ? "Add to Cart" : "Notify Me"}
        </Button>
      </div>
    </div>
  );
};

export default AnimalCard;

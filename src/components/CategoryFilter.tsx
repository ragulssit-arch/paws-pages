import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      All: "🐾",
      Dogs: "🐕",
      Cats: "🐱",
      Birds: "🦜",
      Fish: "🐠",
      Rabbits: "🐰",
      Turtles: "🐢",
    };
    return icons[category] || "🐾";
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg scale-105"
              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground card-shadow"
          )}
        >
          <span className="mr-2">{getCategoryIcon(category)}</span>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

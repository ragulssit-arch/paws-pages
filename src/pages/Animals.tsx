import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimalCard from "@/components/AnimalCard";
import CategoryFilter from "@/components/CategoryFilter";
import { animals, categories } from "@/data/animals";
import { Search } from "lucide-react";

const Animals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesCategory = activeCategory === "All" || animal.category === activeCategory;
      const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        animal.features.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-br from-muted via-background to-cream paw-pattern py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Adorable</span> Pets
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Find your perfect companion from our wide selection of healthy, happy pets. 
              Each one is ready to bring joy to your home!
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search pets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* Animals Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            {filteredAnimals.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-8 text-center">
                  Showing <span className="font-semibold text-foreground">{filteredAnimals.length}</span> pets
                  {activeCategory !== "All" && (
                    <span> in <span className="font-semibold text-primary">{activeCategory}</span></span>
                  )}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredAnimals.map((animal, index) => (
                    <div
                      key={animal.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <AnimalCard animal={animal} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <span className="text-6xl mb-4 block">🔍</span>
                <h3 className="text-xl font-bold text-foreground mb-2">No pets found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Animals;

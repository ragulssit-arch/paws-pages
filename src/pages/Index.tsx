import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PawPrint, Heart, Shield, Truck, Star } from "lucide-react";
import heroPets from "@/assets/hero-pets.png";

const Index = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthy Pets",
      description: "All our pets are vaccinated and health-checked by veterinarians.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "We source pets only from ethical and certified breeders.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Safe Delivery",
      description: "Careful and comfortable transportation for your new friend.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Support",
      description: "Get guidance from our pet care specialists anytime.",
    },
  ];

  const categories = [
    { name: "Dogs", emoji: "🐕", count: 3 },
    { name: "Cats", emoji: "🐱", count: 3 },
    { name: "Birds", emoji: "🦜", count: 3 },
    { name: "Fish", emoji: "🐠", count: 3 },
    { name: "Rabbits", emoji: "🐰", count: 2 },
    { name: "Turtles", emoji: "🐢", count: 2 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-cream paw-pattern">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <PawPrint className="w-4 h-4" />
                  Welcome to PawPalace
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                  Find Your Perfect{" "}
                  <span className="text-primary">Furry Friend</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Discover adorable pets waiting for their forever home. From playful puppies 
                  to colorful fish, we have the perfect companion for you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="hero" asChild>
                    <Link to="/animals">
                      <PawPrint className="w-5 h-5" />
                      Browse Pets
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20 rounded-3xl blur-3xl" />
                <img
                  src={heroPets}
                  alt="Cute pets - dog, cat, and rabbit"
                  className="relative w-full max-w-lg mx-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
          
          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our wide variety of pets. Whether you want a loyal dog, 
                a cuddly cat, or a colorful fish, we have them all!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/animals?category=${category.name}`}
                  className="group bg-card rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-4xl md:text-5xl block mb-3 group-hover:animate-bounce-soft">
                    {category.emoji}
                  </span>
                  <h3 className="font-bold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} available</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted paw-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose PawPalace?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to connecting loving families with healthy, happy pets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-sky">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Meet Your New Best Friend?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Visit our store or browse online to find the perfect pet for your family. 
              Our friendly staff is here to help you every step of the way!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/animals">View All Pets</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, Pill, Microscope, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-capsules.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Pill,
      title: "Capsule Types",
      description: "Learn about hard and soft gelatin capsules used in pharmaceutical manufacturing.",
    },
    {
      icon: Settings,
      title: "Filling Process",
      description: "Understand the step-by-step process of capsule filling from separation to quality check.",
    },
    {
      icon: Microscope,
      title: "Equipment",
      description: "Explore the machinery and equipment used in modern capsule filling operations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="Capsule filling background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Capsule Filling Process
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the pharmaceutical manufacturing process of capsule filling, from raw materials to finished products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/process")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Learn the Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/types")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore Capsule Types
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive information about capsule filling in pharmaceutical manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Explore?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Dive deep into the world of pharmaceutical capsule manufacturing
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/process")}
            className="bg-card text-foreground hover:bg-card/90"
          >
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

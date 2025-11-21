import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Shield, Clock, DollarSign, Users } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: CheckCircle2,
      title: "Precise Dosing",
      description: "Capsules provide accurate and consistent dosing of active pharmaceutical ingredients, reducing medication errors.",
    },
    {
      icon: Clock,
      title: "Fast Production",
      description: "Modern automated filling machines can produce thousands of capsules per hour with high efficiency.",
    },
    {
      icon: Shield,
      title: "Stability Protection",
      description: "Gelatin shells protect moisture-sensitive and light-sensitive drugs, improving shelf life and stability.",
    },
    {
      icon: Users,
      title: "Easy to Swallow",
      description: "Smooth gelatin surface makes capsules easier to swallow compared to tablets, improving patient compliance.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Lower manufacturing costs compared to other dosage forms, with minimal waste and efficient production.",
    },
    {
      icon: TrendingUp,
      title: "Versatile Applications",
      description: "Can encapsulate powders, granules, pellets, liquids, and combinations of different ingredients.",
    },
  ];

  const applications = [
    {
      title: "Pharmaceutical Industry",
      items: [
        "Prescription medications",
        "Over-the-counter drugs",
        "Combination therapies",
        "Controlled-release formulations",
        "Taste-masked medications",
      ],
    },
    {
      title: "Nutraceuticals & Supplements",
      items: [
        "Vitamins and minerals",
        "Herbal supplements",
        "Omega-3 fatty acids",
        "Probiotics",
        "Dietary supplements",
      ],
    },
    {
      title: "Research & Development",
      items: [
        "Clinical trial formulations",
        "Bioavailability studies",
        "Stability testing",
        "Dose-ranging studies",
        "Prototype development",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Advantages & Applications
            </h1>
            <p className="text-lg text-muted-foreground">
              Benefits of capsule filling in pharmaceutical manufacturing
            </p>
          </div>

          {/* Advantages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Key Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="animate-scale-in shadow-card hover:shadow-hover transition-all duration-300 border-border"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <advantage.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Applications Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Industry Applications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <Card
                  key={index}
                  className="animate-slide-in shadow-card hover:shadow-hover transition-all duration-300 border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-16 bg-gradient-primary rounded-lg p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Why Choose Capsule Filling?
            </h3>
            <p className="text-primary-foreground/90 max-w-3xl mx-auto">
              Capsule filling offers a perfect balance of efficiency, accuracy, and versatility in pharmaceutical manufacturing. 
              From small-scale laboratory production to large-scale commercial operations, capsule filling technology continues 
              to be a cornerstone of modern pharmaceutical dosage form manufacturing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;

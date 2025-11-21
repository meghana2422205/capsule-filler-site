import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, FlaskConical, Sparkles, Weight } from "lucide-react";
import fillingMachineImage from "@/assets/filling-machine.jpg";

const Equipment = () => {
  const equipment = [
    {
      icon: Cog,
      title: "Capsule Filling Machine",
      description: "Automated equipment for high-speed capsule filling operations",
      specifications: [
        "Production capacity: 5,000 - 150,000 capsules/hour",
        "Filling accuracy: ±3% weight variation",
        "Compatible with capsule sizes 000-5",
        "Automatic separation, filling, and joining",
      ],
      types: [
        "Manual filling machines (laboratory scale)",
        "Semi-automatic machines (small batch production)",
        "Fully automatic machines (large scale manufacturing)",
      ],
    },
    {
      icon: FlaskConical,
      title: "Powder Mixing Equipment",
      description: "Ensures uniform distribution of active ingredients",
      specifications: [
        "V-blender or double cone mixer",
        "Capacity: 50-1000 liters",
        "Mixing time: 15-30 minutes",
        "Material: Stainless steel 316L",
      ],
      types: [
        "V-type blenders for free-flowing powders",
        "Double cone blenders for general mixing",
        "Ribbon blenders for cohesive materials",
      ],
    },
    {
      icon: Sparkles,
      title: "Capsule Polishing Machine",
      description: "Removes dust and provides professional finish",
      specifications: [
        "Cleaning capacity: 50,000-200,000 caps/hour",
        "Soft brush system for gentle cleaning",
        "Integrated vacuum dust collection",
        "Minimal capsule damage (<0.1%)",
      ],
      types: [
        "Rotary brush polishers",
        "Air jet cleaning systems",
        "Combined brush and vacuum units",
      ],
    },
    {
      icon: Weight,
      title: "Quality Control Equipment",
      description: "Testing and inspection instruments",
      specifications: [
        "Weight variation analyzer",
        "Disintegration testing apparatus",
        "Dissolution tester",
        "Visual inspection systems",
      ],
      types: [
        "Analytical balances (0.1mg accuracy)",
        "Checkweighers for in-line monitoring",
        "Vision inspection systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Equipment Used
            </h1>
            <p className="text-lg text-muted-foreground">
              Modern machinery for pharmaceutical capsule manufacturing
            </p>
          </div>

          <div className="mb-12 animate-scale-in">
            <img
              src={fillingMachineImage}
              alt="Capsule filling equipment"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <Card
                key={index}
                className="animate-scale-in shadow-card hover:shadow-hover transition-all duration-300 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Specifications</h4>
                    <ul className="space-y-1">
                      {item.specifications.map((spec, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Types Available</h4>
                    <ul className="space-y-1">
                      {item.types.map((type, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-secondary mr-2">→</span>
                          <span className="text-muted-foreground">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;

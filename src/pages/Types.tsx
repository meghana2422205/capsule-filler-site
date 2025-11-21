import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import capsuleTypesImage from "@/assets/capsule-types.jpg";

const Types = () => {
  const capsuleTypes = [
    {
      title: "Hard Gelatin Capsules",
      description: "Two-piece capsules consisting of a body and cap",
      features: [
        "Most commonly used in pharmaceutical industry",
        "Available in various sizes (000 to 5)",
        "Can be filled with powder, granules, or pellets",
        "Easy to swallow and digest",
        "Cost-effective manufacturing",
        "Suitable for moisture-sensitive drugs",
      ],
      applications: [
        "Powder medications",
        "Pellet formulations",
        "Combination products",
        "Nutraceuticals and supplements",
      ],
    },
    {
      title: "Soft Gelatin Capsules",
      description: "One-piece capsules formed and filled simultaneously",
      features: [
        "Hermetically sealed capsules",
        "Ideal for liquid and semi-solid fills",
        "Better bioavailability for certain drugs",
        "Protection from light and oxygen",
        "Pleasant appearance and taste masking",
        "Available in various shapes and sizes",
      ],
      applications: [
        "Oils and lipid-based drugs",
        "Vitamins (Vitamin E, Fish Oil)",
        "Poorly water-soluble drugs",
        "Herbal extracts",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Types of Capsules
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the different types of pharmaceutical capsules
            </p>
          </div>

          <div className="mb-12 animate-scale-in">
            <img
              src={capsuleTypesImage}
              alt="Different types of capsules"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
            />
          </div>

          <div className="space-y-8">
            {capsuleTypes.map((type, index) => (
              <Card
                key={index}
                className="animate-slide-in shadow-card hover:shadow-hover transition-all duration-300 border-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Applications</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {type.applications.map((app, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-secondary mr-2">→</span>
                          <span className="text-muted-foreground">{app}</span>
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

export default Types;

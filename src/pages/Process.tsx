import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      step: 1,
      title: "Empty Capsule Separation",
      description: "Capsules are oriented and separated into body and cap sections using automated machinery. The capsule shells are loaded into the filling machine's magazine.",
      details: [
        "Automated orientation ensures proper alignment",
        "Vacuum systems separate cap from body",
        "Quality inspection removes defective shells",
      ],
    },
    {
      step: 2,
      title: "Powder Preparation & Filling",
      description: "The active pharmaceutical ingredient (API) is mixed with excipients and precisely measured into the capsule bodies using dosing discs or tamping pins.",
      details: [
        "Pre-mixed powder must have good flow properties",
        "Weight variation control is critical",
        "Multiple dosing stations ensure accuracy",
      ],
    },
    {
      step: 3,
      title: "Capsule Joining",
      description: "The cap and body sections are brought together and joined using precise mechanical or vacuum-assisted systems to ensure proper seal.",
      details: [
        "Alignment mechanisms ensure proper fit",
        "Controlled pressure prevents damage",
        "Visual inspection for proper closure",
      ],
    },
    {
      step: 4,
      title: "Locking & Sealing",
      description: "Capsules are locked to prevent accidental opening. Some applications use banding or sealing techniques for additional security.",
      details: [
        "Band sealing for tamper evidence",
        "Fusion sealing for complete closure",
        "Moisture protection when required",
      ],
    },
    {
      step: 5,
      title: "Polishing & Cleaning",
      description: "Filled capsules pass through polishing units to remove dust, powder residue, and ensure a clean, professional appearance.",
      details: [
        "Soft brushes remove surface powder",
        "Vacuum systems collect excess material",
        "Static elimination prevents dust attraction",
      ],
    },
    {
      step: 6,
      title: "Quality Control & Inspection",
      description: "Final inspection ensures weight uniformity, appearance, and integrity. Defective capsules are rejected before packaging.",
      details: [
        "Weight variation check (USP/BP standards)",
        "Visual inspection for defects",
        "Disintegration and dissolution testing",
        "Microbiological testing when required",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Capsule Filling Process
            </h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step guide to pharmaceutical capsule manufacturing
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className="md:ml-20 shadow-card hover:shadow-hover transition-all duration-300 border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-lg">
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="pt-2">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
                          Key Points
                        </h4>
                        <ul className="space-y-2 ml-7">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

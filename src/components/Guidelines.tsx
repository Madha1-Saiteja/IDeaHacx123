import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Shield, Calendar } from "lucide-react";

const Guidelines = () => {
  const compliance = [
    "Minimum of one event per semester will be conducted.",
    "All activities will be held with prior approval from the HOD.",
    "The club will actively seek collaborations with other clubs and external tech communities.",
    "Equal opportunities and active involvement of all club members is ensured.",
    "Records of meetings, participation, and outcomes will be systematically maintained.",
    "The club upholds ethics, inclusivity, and professionalism in all its operations."
  ];

  const financialSupport = [
    {
      item: "Prizes",
      description: "for hackathon winners."
    },
    {
      item: "Certificates",
      description: "for all participants."
    },
    {
      item: "Materials & Logistics",
      description: "Tech equipment, snacks, stationery, and event infrastructure."
    }
  ];

  return (
    <section id="guidelines" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Shield className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Club Guidelines</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Guidelines & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our operational framework and support requirements for successful club activities.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Compliance Guidelines */}
          <Card className="group hover:shadow-card transition-all duration-300 animate-scale-in">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Compliance with Club Guidelines
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {compliance.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {guideline}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Financial Support */}
          <Card className="group hover:shadow-card transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Financial Support Requested
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {financialSupport.map((support, index) => (
                <div key={index} className="p-4 bg-accent/50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {support.item}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {support.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
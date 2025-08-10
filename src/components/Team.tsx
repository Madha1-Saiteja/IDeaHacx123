import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users2, Crown, Calendar, DollarSign, Settings } from "lucide-react";

const Team = () => {
  const organizers = [
    {
      name: "Jakkamsetti Madhavan",
      role: "President",
      rollNo: "22501A4218",
      icon: Crown,
      color: "bg-yellow-500"
    },
    {
      name: "Musugu Dhakshesh Ram Kiran",
      role: "Event Coordinator",
      rollNo: "22501A4237",
      icon: Calendar,
      color: "bg-blue-500"
    },
    {
      name: "Akshitha Ponna",
      role: "Technical Event Manager",
      rollNo: "22501A4201",
      icon: Settings,
      color: "bg-green-500"
    },
    {
      name: "Mudigonda Manogna",
      role: "Finance Budgetter",
      rollNo: "22501A4236",
      icon: DollarSign,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Users2 className="h-4 w-4 mr-2 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Leadership Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Club Organizers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and organizing impactful events for our tech community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {organizers.map((organizer, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-sm animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${organizer.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse`}>
                  <organizer.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {organizer.name}
                </h3>
                
                <Badge variant="outline" className="mb-4 font-medium">
                  {organizer.role}
                </Badge>
                
                <p className="text-sm text-muted-foreground">
                  Roll No: {organizer.rollNo}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">Ready to join our mission? Connect with any of our organizers!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
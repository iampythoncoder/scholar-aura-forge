import { Award, Target, Heart, Users, Rocket, BookOpen, Globe, Lightbulb, TrendingUp, Star, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TagCloud3D from "@/components/TagCloud3D";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in education and leadership development.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new ideas and creative solutions to empower students.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive network where every member can thrive.",
    },
    {
      icon: Rocket,
      title: "Impact",
      description: "Creating meaningful change in the lives of students and communities.",
    },
  ];

  const milestones = [
    { year: "2020", title: "Foundation", description: "Future Scholars Association was founded with a vision to make education accessible to all" },
    { year: "2021", title: "First Campaign", description: "Launched our first fundraising campaign, raising $2,000 for student scholarships" },
    { year: "2022", title: "Community Growth", description: "Expanded to 20 active members and partnered with 5 local schools" },
    { year: "2023", title: "Major Impact", description: "Reached $5,000 in total funds raised, impacting over 200 students' lives" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Empowering Tomorrow's{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Leaders Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We're a passionate community dedicated to breaking down barriers and creating opportunities for students to achieve their dreams.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="relative group">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:border-primary/50 transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">$5K+</p>
                  <p className="text-sm text-muted-foreground font-medium">Funds Raised</p>
                </div>
              </div>
              <div className="relative group">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent/50 transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-2">20+</p>
                  <p className="text-sm text-muted-foreground font-medium">Team Members</p>
                </div>
              </div>
              <div className="relative group">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:border-gold/50 transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-gold mb-2">5+</p>
                  <p className="text-sm text-muted-foreground font-medium">School Partners</p>
                </div>
              </div>
              <div className="relative group">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:border-secondary/50 transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">200+</p>
                  <p className="text-sm text-muted-foreground font-medium">Lives Impacted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                How We Started
              </div>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p className="text-2xl font-semibold text-foreground">
                  It all started in a cramped dorm room with three college students who were tired of seeing talented peers drop out because they couldn't afford textbooks.
                </p>
                
                <p>
                  We didn't have some grand master plan. We just knew something had to change. So we pooled together what little money we had, created a basic website, and started asking people if they'd help fund a few student projects. To our surprise, people actually cared.
                </p>
                
                <p>
                  Fast forward a few years, and we've gone from helping 3 students buy textbooks to supporting hundreds of educational initiatives. We've had students launch tutoring programs, build computer labs in under-resourced schools, and even start their own scholarship funds.
                </p>
                
                <p>
                  The truth is, we're not a big organization with fancy offices or a huge staff. We're a group of passionate people who believe education shouldn't be a luxury. Every dollar raised, every project funded, every student helped—it's real people making a real difference.
                </p>
                
                <p className="text-xl font-medium text-primary pt-4">
                  We're just getting started, and we'd love for you to be part of this journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Interactive Tag Cloud */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our core values and principles
            </p>
          </div>
          
          <div className="h-[500px] flex items-center justify-center">
            <TagCloud3D />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 border-2 hover:border-accent/50 transition-all hover:shadow-glow hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="relative inline-block">
                    <value.icon className="w-12 h-12 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:bg-accent/40 transition-all" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Let's Build Something Better, Together
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Every student has potential. Sometimes they just need a little help unlocking it. Join us in making education accessible to everyone, one project at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-elegant hover:scale-105 transition-all">
                <Heart className="w-5 h-5 mr-2" />
                Support a Project
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-border hover:bg-muted hover:scale-105 transition-all">
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

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
      <section className="relative py-32 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-glass backdrop-blur-[1px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/25 backdrop-blur-md text-white text-sm font-semibold border border-white/40 shadow-glass">
              <Sparkles className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Empowering Tomorrow's{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-white to-gold bg-clip-text text-transparent">
                  Leaders Today
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-accent rounded-full blur-sm" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
              We're a passionate community dedicated to breaking down barriers and creating opportunities for students to achieve their dreams.
            </p>

            {/* Stats Grid with Glass Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-glass hover:shadow-glow transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">$5K+</p>
                  <p className="text-sm text-white/90 font-medium">Funds Raised</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-glass hover:shadow-gold transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">20+</p>
                  <p className="text-sm text-white/90 font-medium">Team Members</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-glass hover:shadow-elegant transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">5+</p>
                  <p className="text-sm text-white/90 font-medium">School Partners</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-glass hover:shadow-glow transition-all hover:-translate-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">200+</p>
                  <p className="text-sm text-white/90 font-medium">Lives Impacted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  <BookOpen className="w-4 h-4" />
                  Origin Story
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Founded on a Vision of{" "}
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    Possibility
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Future Scholars Association was born from a simple yet powerful belief: every student deserves the opportunity to pursue their dreams, regardless of their financial circumstances.
                  </p>
                  <p>
                    What started as a small group of passionate individuals has grown into a thriving community of scholars, mentors, and supporters. Together, we've created a platform where educational projects find the support they need to come to life.
                  </p>
                  <p>
                    Through crowdfunding campaigns and community partnerships, we've helped bridge the gap between classroom needs and available resources, ensuring that innovative educational projects don't go unfunded.
                  </p>
                </div>
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                  <Heart className="w-5 h-5 mr-2" />
                  Support a Project
                </Button>
              </div>

              {/* Visual Card */}
              <div className="relative animate-slide-in-right">
                <Card className="p-8 border-2 border-primary/20 hover:border-accent/50 transition-all hover:shadow-glow">
                  <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-accent/20">
                    <div className="absolute inset-0">
                      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                      <div className="absolute bottom-10 right-10 w-36 h-36 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "700ms" }} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1400ms" }} />
                    </div>
                    
                    <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
                      <div className="flex items-center justify-center">
                        <Target className="w-12 h-12 text-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                      </div>
                      <div className="flex items-center justify-center">
                        <Lightbulb className="w-12 h-12 text-accent animate-bounce" style={{ animationDelay: '200ms' }} />
                      </div>
                      <div className="flex items-center justify-center">
                        <Users className="w-12 h-12 text-gold animate-bounce" style={{ animationDelay: '400ms' }} />
                      </div>
                      <div className="flex items-center justify-center">
                        <Rocket className="w-12 h-12 text-secondary animate-bounce" style={{ animationDelay: '600ms' }} />
                      </div>
                      <div className="flex items-center justify-center">
                        <Heart className="w-14 h-14 text-accent font-bold animate-bounce" style={{ animationDelay: '800ms' }} />
                      </div>
                      <div className="flex items-center justify-center">
                        <Globe className="w-12 h-12 text-primary animate-bounce" style={{ animationDelay: '1000ms' }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our organization
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-primary transform -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Year Badge */}
                  <div className={`md:flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-accent text-accent-foreground text-2xl font-bold shadow-glow">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-12 h-12 bg-gradient-primary rounded-full border-4 border-background shadow-elegant items-center justify-center z-10">
                    <Star className="w-5 h-5 text-white" />
                  </div>

                  {/* Content Card */}
                  <Card className={`md:flex-1 p-6 border-2 hover:border-accent/50 transition-all hover:shadow-glow group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
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
      <section className="py-32 relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-glass backdrop-blur-[1px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/25 backdrop-blur-md text-white text-sm font-semibold border border-white/40 shadow-glass">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Together, We're Building a Brighter Future for Education
            </h2>

            <p className="text-xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
              Join us in supporting classroom projects and making quality education accessible to every student. Every contribution creates ripples of positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-glow hover:scale-105 transition-all">
                <Heart className="w-5 h-5 mr-2" />
                Support Projects
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/15 backdrop-blur-md hover:scale-105 transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

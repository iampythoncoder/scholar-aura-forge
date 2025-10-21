import { Award, Target, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in education and leadership development.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing new ideas and creative solutions to empower students.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive network where every member can thrive.",
    },
    {
      icon: Sparkles,
      title: "Impact",
      description: "Creating meaningful change in the lives of students and communities.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground">
              About{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Future Scholars
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We are a passionate community dedicated to empowering the next generation
              of leaders through education, mentorship, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Asymmetric Layout */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent -skew-x-12 transform -translate-x-1/4" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Founded on a Vision of{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Possibility
                </span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Future Scholars Association was born from a simple yet powerful belief:
                  every student deserves the opportunity to pursue their dreams, regardless
                  of their financial circumstances.
                </p>
                <p>
                  What started as a small group of passionate individuals has grown into a
                  thriving community of scholars, mentors, and supporters. Together, we've
                  provided over $250,000 in scholarships and impacted over 1,000 lives.
                </p>
                <p>
                  Our journey is one of continuous growth, learning, and impact. Every
                  student we help, every event we host, and every connection we make
                  brings us closer to our vision of a world where education is accessible
                  to all.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-gold/20 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <Sparkles className="w-20 h-20 text-accent mx-auto animate-float" />
                    <p className="text-2xl font-bold text-primary">
                      Building Tomorrow, Together
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group p-8 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-6">
                  <value.icon className="w-12 h-12 text-accent transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
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

      {/* Mission Statement - Diagonal Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent skew-y-3 transform" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium border border-gold/20">
                Our Mission
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Empowering Students to Become the Leaders, Innovators, and
              Change-Makers of Tomorrow
            </h2>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We provide comprehensive support including financial assistance, academic
              mentorship, professional development, and a vibrant community network to
              help students overcome barriers and achieve their full potential.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <p className="text-4xl font-bold text-gold mb-2">$250K+</p>
                <p className="text-primary-foreground/80">In Scholarships</p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <p className="text-4xl font-bold text-gold mb-2">500+</p>
                <p className="text-primary-foreground/80">Active Members</p>
              </div>
              <div className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <p className="text-4xl font-bold text-gold mb-2">1000+</p>
                <p className="text-primary-foreground/80">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

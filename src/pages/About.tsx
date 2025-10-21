import { Award, Target, Heart, Sparkles, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in education and leadership development.",
      year: "2020",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing new ideas and creative solutions to empower students.",
      year: "2021",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive network where every member can thrive.",
      year: "2022",
    },
    {
      icon: Sparkles,
      title: "Impact",
      description: "Creating meaningful change in the lives of students and communities.",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Split Diagonal */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold/30 via-transparent to-accent/20" 
               style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 100%, 0% 100%)" }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div className="inline-block px-5 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium border-2 border-gold/40 backdrop-blur-sm">
                  Our Story
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground leading-tight">
                  About{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent">
                    Future Scholars
                  </span>
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  We are a passionate community dedicated to empowering the next generation
                  of leaders through education, mentorship, and unwavering support.
                </p>
              </div>
              
              {/* Stats Box */}
              <div className="animate-slide-in-right">
                <div className="relative p-8 rounded-3xl bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/20">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-gold mb-1">250K+</p>
                      <p className="text-sm text-primary-foreground/80">Scholarships</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-gold mb-1">500+</p>
                      <p className="text-sm text-primary-foreground/80">Members</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-gold mb-1">1000+</p>
                      <p className="text-sm text-primary-foreground/80">Lives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Bento Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Large Story Card */}
              <Card className="lg:col-span-2 lg:row-span-2 p-10 border-2 hover:border-accent/50 transition-all hover:shadow-glow group">
                <div className="h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
                      <Lightbulb className="w-4 h-4" />
                      Origin Story
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-accent transition-colors">
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
                    </div>
                  </div>
                  <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-gold/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-accent animate-float" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Impact Card */}
              <Card className="p-8 border-2 hover:border-gold/50 transition-all hover:shadow-gold group">
                <TrendingUp className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Growing Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Year over year, we're expanding our reach and deepening our support for students worldwide.
                </p>
              </Card>

              {/* Mission Card */}
              <Card className="p-8 border-2 hover:border-accent/50 transition-all hover:shadow-glow group bg-gradient-to-br from-accent/5 to-primary/5">
                <Heart className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To remove barriers and create pathways for every student to achieve their educational goals.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Timeline */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Journey of{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles evolved as we grew, defining who we are today
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-accent transform md:-translate-x-1/2" />

            <div className="space-y-16">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                  </div>

                  {/* Year Badge */}
                  <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 ${
                    index % 2 === 0 ? '-translate-y-16' : 'translate-y-16'
                  }`}>
                    <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/30">
                      {value.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <Card className={`flex-1 p-8 border-2 hover:border-accent/50 transition-all hover:shadow-glow group ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-[52%]' : 'md:ml-[52%]'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <value.icon className="w-10 h-10 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:bg-accent/30 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium border-2 border-gold/40 backdrop-blur-sm">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Empowering Students to Become the Leaders, Innovators, and
                Change-Makers of Tomorrow
              </h2>

              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                We provide comprehensive support including financial assistance, academic
                mentorship, professional development, and a vibrant community network to
                help students overcome barriers and achieve their full potential.
              </p>
            </div>

            {/* Impact Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="group p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-gold/50 transition-all hover:scale-105">
                <p className="text-5xl font-bold text-gold mb-3">$250K+</p>
                <p className="text-primary-foreground/90 font-medium">In Scholarships Awarded</p>
              </div>
              <div className="group p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-gold/50 transition-all hover:scale-105">
                <p className="text-5xl font-bold text-gold mb-3">500+</p>
                <p className="text-primary-foreground/90 font-medium">Active Community Members</p>
              </div>
              <div className="group p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-gold/50 transition-all hover:scale-105">
                <p className="text-5xl font-bold text-gold mb-3">1000+</p>
                <p className="text-primary-foreground/90 font-medium">Lives Transformed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

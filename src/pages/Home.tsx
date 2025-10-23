import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TagCloud3D from "@/components/TagCloud3D";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "20" },
    { icon: Award, label: "Funds Raised", value: "$5K" },
    { icon: Calendar, label: "Events Hosted", value: "3" },
    { icon: Heart, label: "Lives Impacted", value: "200+" },
  ];

  const upcomingEvents = [
    {
      title: "Leadership Workshop",
      date: "Jan 15, 2024",
      type: "Workshop",
    },
    {
      title: "Networking Mixer",
      date: "Jan 22, 2024",
      type: "Social",
    },
    {
      title: "Mentorship Launch",
      date: "Feb 5, 2024",
      type: "Program",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Tag Cloud */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium border border-gold/20">
                  Building the Future Together
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary-foreground">
                Empowering
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Tomorrow's Leaders
                </span>
                Today
              </h1>

              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
                Join a community of passionate scholars, innovators, and change-makers
                dedicated to creating meaningful impact through education and leadership.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/assistance">
                  <Button
                    size="lg"
                    className="bg-gold text-gold-foreground hover:shadow-gold transition-all hover:scale-105"
                  >
                    Apply for Assistance
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 hover:shadow-elegant transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - 3D Tag Cloud */}
            <div className="animate-slide-in-right">
              <TagCloud3D />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Mission Section - Asymmetric design */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent skew-x-12 transform translate-x-1/4" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our Mission &{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Impact
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Future Scholars Association is dedicated to breaking down barriers to
                education and fostering the next generation of leaders. We provide
                financial assistance, mentorship, and a supportive community to help
                students achieve their academic and professional goals.
              </p>
              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="group">
                    Discover Our Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all hover:-translate-y-2 border-2 hover:border-accent/50"
                >
                  <stat.icon className="w-10 h-10 text-accent mb-4" />
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Diagonal Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent skew-y-3 transform" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for inspiring events, workshops, and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 border-2 hover:border-accent/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="p-6 relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    {event.type}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{event.date}</p>
                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/events">
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Organic shape */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Whether you need support or want to support others, there's a place
              for you in our community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/assistance">
                <Button
                  size="lg"
                  className="bg-gold text-gold-foreground hover:shadow-gold transition-all hover:scale-105"
                >
                  Request Assistance
                </Button>
              </Link>
              <Link to="/team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

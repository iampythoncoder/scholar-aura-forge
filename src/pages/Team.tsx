import { Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & President",
      bio: "Passionate about creating opportunities for underserved students.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "sarah@futurescholars.org",
    },
    {
      name: "Marcus Johnson",
      role: "Vice President",
      bio: "Leading our mentorship programs and community outreach initiatives.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "marcus@futurescholars.org",
    },
    {
      name: "Priya Patel",
      role: "Director of Programs",
      bio: "Designing impactful events and workshops for our members.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "priya@futurescholars.org",
    },
    {
      name: "David Kim",
      role: "Treasurer",
      bio: "Managing finances and ensuring sustainable growth of our initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "david@futurescholars.org",
    },
    {
      name: "Elena Rodriguez",
      role: "Communications Director",
      bio: "Telling our story and connecting with our community through media.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "elena@futurescholars.org",
    },
    {
      name: "James Wright",
      role: "Partnerships Lead",
      bio: "Building relationships with organizations to expand our impact.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "james@futurescholars.org",
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
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium border border-gold/20">
                Leadership Team
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground">
              Meet the{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Dreamers & Doers
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Passionate individuals working together to make education accessible
              and empower the next generation of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid - Staggered Layout */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Leadership Row - Larger Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {teamMembers.slice(0, 2).map((member, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 border-2 hover:border-accent/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Profile Image */}
                    <div className="relative shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-all">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                        <Award className="w-6 h-6 text-gold-foreground" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-accent hover:text-accent-foreground transition-colors"
                          asChild
                        >
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-gold hover:text-gold-foreground transition-colors"
                          asChild
                        >
                          <a href={`mailto:${member.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Team Members Grid - Standard Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(2).map((member, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 border-2 hover:border-accent/50 animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="p-6 space-y-4">
                  {/* Profile Image */}
                  <div className="relative mx-auto w-28 h-28">
                    <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-all">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2 justify-center pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-accent/10 hover:text-accent"
                      asChild
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-gold/10 hover:text-gold"
                      asChild
                    >
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Want to{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Join Our Team?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We're always looking for passionate individuals who want to make a
              difference in students' lives.
            </p>
            <Button
              size="lg"
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

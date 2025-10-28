import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Heart, Users, Search, TrendingUp, Award, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-primary-foreground pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Choose students.
              <br />
              <span className="text-secondary">Shape the future.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
              Teachers need books, pencils, technology, and more to help students excel. 
              Support a classroom in your community, or beyond, so every kid has the tools to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/projects">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
                  See classroom projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/submit-project">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                  I'm a teacher
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-6 relative z-10 mt-12">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input 
                  placeholder="Search topics, teachers & schools" 
                  className="md:col-span-2"
                />
                <Input 
                  placeholder="city, state, or zip" 
                />
                <Button type="submit" className="md:col-span-3 bg-gradient-primary hover:shadow-glow">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Projects Funded</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-muted-foreground">Students Impacted</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">$5M+</div>
              <p className="text-muted-foreground">Donated</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Making a difference in education is simple. Here's how you can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto">
                  <Search className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Find a project</CardTitle>
                <CardDescription>
                  Browse classroom projects and find one that speaks to you
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Make a donation</CardTitle>
                <CardDescription>
                  Support a project with a donation of any size
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>See the impact</CardTitle>
                <CardDescription>
                  Get updates on how your donation is making a difference
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Most urgent projects</h2>
              <p className="text-muted-foreground">Projects that need your support right now</p>
            </div>
            <Link to="/projects">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video w-full bg-gradient-primary rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="line-clamp-2">Sample Project Title {i}</CardTitle>
                  <CardDescription>Lincoln Elementary School</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow">
                    <Heart className="h-4 w-4 mr-2" />
                    Support This Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6">
            <Award className="h-10 w-10 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to make a difference?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are helping to transform education, one classroom at a time.
          </p>
          <Link to="/projects">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
              Start Supporting Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

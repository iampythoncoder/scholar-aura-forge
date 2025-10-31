import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Heart, Users, Search, TrendingUp, Award, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Help Teachers.
              <br />
              <span className="text-white/90">Inspire Students.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slide-up">
              Every classroom deserves the resources to succeed. From books and supplies to technology and equipment, 
              you can make a real difference in a student's education. Find a project that speaks to you and help 
              a teacher bring their vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/projects">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                  See classroom projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/submit-project">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  I'm a teacher
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-6 relative z-10 mt-12">
          <Card className="max-w-4xl mx-auto shadow-lg border-0">
            <CardContent className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input 
                  placeholder="Search topics, teachers & schools" 
                  className="md:col-span-2"
                />
                <Input 
                  placeholder="city, state, or zip" 
                />
                <Button type="submit" className="md:col-span-3 bg-primary text-white hover:bg-primary/90">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Making an impact together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people who believe every student deserves access to quality education resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">10,283</div>
              <p className="text-foreground font-medium">Projects Funded</p>
              <p className="text-sm text-muted-foreground mt-2">Since 2020</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">52,847</div>
              <p className="text-foreground font-medium">Students Helped</p>
              <p className="text-sm text-muted-foreground mt-2">Across 48 states</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">$5.2M</div>
              <p className="text-foreground font-medium">Total Donated</p>
              <p className="text-sm text-muted-foreground mt-2">By people like you</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three simple steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting a classroom project is easy and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">1. Find a project</CardTitle>
                <CardDescription className="text-base">
                  Browse projects from real teachers in schools across the country. Filter by subject, location, or urgency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">2. Make a donation</CardTitle>
                <CardDescription className="text-base">
                  Every dollar counts. Choose an amount that works for you, from $5 to fully funding a project.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">3. See the impact</CardTitle>
                <CardDescription className="text-base">
                  Teachers send thank-you notes and photos showing how your support made a real difference.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects that need you</h2>
              <p className="text-muted-foreground">These classrooms are almost there - your donation could make all the difference</p>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="border-2">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Books for Beginning Readers", school: "Lincoln Elementary", progress: 78 },
              { title: "STEM Lab Equipment", school: "Washington Middle School", progress: 65 },
              { title: "Art Supplies for All", school: "Roosevelt High School", progress: 82 }
            ].map((project, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 border-2">
                <div className="aspect-video w-full bg-gradient-to-br from-primary to-primary/70 rounded-t-lg flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{project.progress}%</div>
                    <div className="text-sm">Funded</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  <CardDescription>{project.school}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">${(project.progress * 5).toFixed(0)} of $500</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
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
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your support changes lives</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every donation helps a teacher create a better learning environment. Start browsing projects and see where you can make an impact today.
          </p>
          <Link to="/projects">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Find a Project to Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

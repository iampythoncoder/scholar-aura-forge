import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Filter, Heart, Users, MapPin, Clock, TrendingUp, Award, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  goal_amount: number;
  current_amount: number;
  category: string;
  status: string;
  school_name: string | null;
  student_count: number | null;
  image_url: string | null;
  creator_id: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.school_name && project.school_name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filterCategory === "all" || project.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getProgressPercentage = (current: number, goal: number) => {
    return Math.min((current / goal) * 100, 100);
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "technology": return "💻";
      case "books": return "📚";
      case "arts": return "🎨";
      case "sports": return "⚽";
      case "science": return "🔬";
      default: return "📖";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero Section with Luxury Design */}
      <section className="relative bg-gradient-hero text-foreground py-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-glass" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Discover Opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
              Find Your Perfect Project
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse inspiring classroom projects from passionate teachers and students. Every contribution makes a real difference in education.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Funded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">$2.5M</div>
                <div className="text-sm text-muted-foreground">Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-8 relative z-20">
        {/* Enhanced Search and Filter Card */}
        <Card className="shadow-luxury border-2 border-primary/20 mb-12 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-luxury" />
          <CardContent className="pt-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-3 relative">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by keywords, school name, or subject area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base border-border/50 focus:border-primary"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="h-12 border-border/50 focus:border-primary">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technology">💻 Technology</SelectItem>
                  <SelectItem value="books">📚 Books & Supplies</SelectItem>
                  <SelectItem value="arts">🎨 Arts & Crafts</SelectItem>
                  <SelectItem value="sports">⚽ Sports Equipment</SelectItem>
                  <SelectItem value="science">🔬 Science</SelectItem>
                  <SelectItem value="other">📖 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary transition-colors">
                <Award className="w-3 h-3 mr-1" />
                Urgent
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent/10 hover:border-accent transition-colors">
                <TrendingUp className="w-3 h-3 mr-1" />
                Almost Funded
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gold/10 hover:border-gold transition-colors">
                <Clock className="w-3 h-3 mr-1" />
                New This Week
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        {!isLoading && filteredProjects.length > 0 && (
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-2xl font-semibold text-foreground">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
              </p>
              <p className="text-muted-foreground mt-1">
                Supporting classrooms across the country
              </p>
            </div>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="urgent">Most Urgent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="progress">Highest Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Projects Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground text-lg">Loading amazing projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <Card className="shadow-card border-2 border-dashed border-border">
            <CardContent className="py-20 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">No Projects Found</h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
                We couldn't find any projects matching your criteria. Try adjusting your search or filters.
              </p>
              <Button 
                size="lg"
                onClick={() => { setSearchTerm(""); setFilterCategory("all"); }}
                className="bg-gradient-primary hover:shadow-elegant"
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <Card className="h-full group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 overflow-hidden bg-card">
                  {/* Image Section */}
                  {project.image_url ? (
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-primary/40" />
                    </div>
                  )}
                  
                  <CardHeader className="space-y-3">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {getCategoryIcon(project.category)} {project.category}
                      </Badge>
                      {Math.random() > 0.5 && (
                        <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Urgent
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl">
                      {project.title}
                    </CardTitle>
                    
                    {project.school_name && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="line-clamp-1">{project.school_name}</span>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.student_count && (
                      <div className="flex items-center gap-2 text-sm font-medium text-accent">
                        <Users className="h-4 w-4" />
                        <span>Impacting {project.student_count} students</span>
                      </div>
                    )}

                    {/* Progress Section */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-2xl font-bold text-primary">
                          ${project.current_amount.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          of ${project.goal_amount.toLocaleString()} goal
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={getProgressPercentage(project.current_amount, project.goal_amount)} 
                          className="h-3"
                        />
                        <div className="absolute inset-0 bg-gradient-luxury opacity-20 rounded-full" />
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{Math.round(getProgressPercentage(project.current_amount, project.goal_amount))}% funded</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {Math.floor(Math.random() * 30 + 1)} days left
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:shadow-glow group-hover:scale-105 transition-all mt-2">
                      <Heart className="h-4 w-4 mr-2" />
                      Support This Project
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

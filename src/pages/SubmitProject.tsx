import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, ExternalLink } from "lucide-react";

const SubmitProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    gofundme_link: "",
    image_url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("projects").insert({
        title: formData.title,
        description: formData.description,
        gofundme_link: formData.gofundme_link,
        image_url: formData.image_url || null,
        category: 'supplies' as any,
        goal_amount: 0,
        status: 'active' as any,
        current_amount: 0,
      });

      if (error) throw error;

      toast({
        title: "Project submitted!",
        description: "Your project has been successfully added to the platform.",
      });

      navigate("/projects");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Submit a Project</h1>
          <p className="text-muted-foreground text-lg">
            Add your GoFundMe campaign to reach more donors
          </p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Share your GoFundMe campaign with our community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title *</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="E.g., Books for Our Reading Corner"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your project and how it will help students..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gofundme_link">GoFundMe Link *</Label>
                <div className="relative">
                  <ExternalLink className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="gofundme_link"
                    name="gofundme_link"
                    type="url"
                    placeholder="https://www.gofundme.com/f/your-campaign"
                    value={formData.gofundme_link}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Paste the full URL of your GoFundMe campaign
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url">Project Image URL (optional)</Label>
                <Input
                  id="image_url"
                  name="image_url"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image_url}
                  onChange={handleChange}
                />
                <p className="text-sm text-muted-foreground">
                  Provide a URL to an image that represents your project
                </p>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Project"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitProject;

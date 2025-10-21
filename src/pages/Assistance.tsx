import { useState } from "react";
import { Heart, DollarSign, BookOpen, Users, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Assistance = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    assistanceType: "",
    description: "",
  });

  const assistanceTypes = [
    {
      icon: DollarSign,
      title: "Financial Support",
      description: "Scholarships and emergency funds to help cover tuition, books, and living expenses.",
    },
    {
      icon: BookOpen,
      title: "Academic Mentorship",
      description: "One-on-one tutoring and study support from experienced mentors.",
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Resume reviews, interview prep, and professional networking opportunities.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Application Submitted! ✨",
      description: "We'll review your request and get back to you within 48 hours.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <Card className="max-w-2xl mx-6 p-12 text-center space-y-6 border-2 border-accent/50 shadow-glow animate-slide-up">
          <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-bold">Application Received!</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for reaching out. Our team will carefully review your request
            and respond within 48 hours. We're here to support you on your journey!
          </p>
          <div className="pt-4">
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow"
            >
              Submit Another Request
            </Button>
          </div>
        </Card>
      </div>
    );
  }

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
                We're Here to Help
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground">
              Request{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Assistance
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Don't let financial or academic challenges hold you back. We're committed
              to supporting your educational journey every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Assistance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">
              How We Can{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Support You
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer various forms of assistance tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {assistanceTypes.map((type, index) => (
              <Card
                key={index}
                className="group p-8 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-6">
                  <type.icon className="w-12 h-12 text-accent transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 border-2 shadow-elegant animate-slide-up">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Application Form</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-base">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="mt-2"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-2"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="mt-2"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="assistanceType" className="text-base">
                      Type of Assistance Needed *
                    </Label>
                    <Select
                      required
                      value={formData.assistanceType}
                      onValueChange={(value) => handleChange("assistanceType", value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select assistance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial Support</SelectItem>
                        <SelectItem value="academic">Academic Mentorship</SelectItem>
                        <SelectItem value="career">Career Guidance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-base">
                      Tell Us Your Story *
                    </Label>
                    <Textarea
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => handleChange("description", e.target.value)}
                      className="mt-2 min-h-32"
                      placeholder="Please describe your situation and how we can best support you..."
                    />
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="pt-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-accent transition-all duration-300"
                      style={{
                        width: `${
                          (Object.values(formData).filter((v) => v !== "").length /
                            Object.keys(formData).length) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    {Object.values(formData).filter((v) => v !== "").length} of{" "}
                    {Object.keys(formData).length} fields completed
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all"
                >
                  Submit Application
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  All information will be kept confidential and used solely for
                  reviewing your assistance request.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
                <h3 className="font-bold mb-2">How long does the review process take?</h3>
                <p className="text-muted-foreground">
                  We typically review applications within 48 hours and will reach out
                  via email with next steps.
                </p>
              </Card>

              <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
                <h3 className="font-bold mb-2">Who is eligible for assistance?</h3>
                <p className="text-muted-foreground">
                  All students facing financial, academic, or career-related challenges
                  are welcome to apply. We evaluate each case individually.
                </p>
              </Card>

              <Card className="p-6 border-2 hover:border-accent/50 transition-colors">
                <h3 className="font-bold mb-2">Is my information kept confidential?</h3>
                <p className="text-muted-foreground">
                  Absolutely. All information shared is kept strictly confidential and
                  will only be used for your assistance application.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assistance;

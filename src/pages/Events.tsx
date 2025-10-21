import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const events = [
    {
      title: "Leadership Excellence Workshop",
      date: "January 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "University Hall, Room 301",
      type: "Workshop",
      attendees: 45,
      description: "Develop essential leadership skills through interactive exercises and real-world case studies.",
      status: "upcoming",
    },
    {
      title: "Networking Mixer: Connect & Grow",
      date: "January 22, 2024",
      time: "6:00 PM - 8:30 PM",
      location: "Innovation Center",
      type: "Social",
      attendees: 80,
      description: "Meet fellow scholars, alumni, and industry professionals in a casual networking environment.",
      status: "upcoming",
    },
    {
      title: "Career Development Panel",
      date: "February 5, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      type: "Panel",
      attendees: 120,
      description: "Hear from successful professionals about navigating your career path and making an impact.",
      status: "upcoming",
    },
    {
      title: "Mentorship Program Launch",
      date: "February 12, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Student Center",
      type: "Program",
      attendees: 60,
      description: "Kick-off event for our new mentorship initiative connecting students with industry leaders.",
      status: "upcoming",
    },
    {
      title: "Community Service Day",
      date: "December 10, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Local Community Center",
      type: "Service",
      attendees: 95,
      description: "Gave back to our community through various volunteer activities and outreach programs.",
      status: "past",
    },
    {
      title: "Annual Scholarship Gala",
      date: "November 18, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom",
      type: "Gala",
      attendees: 200,
      description: "Celebrated our achievements and raised funds for future scholarships.",
      status: "past",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || event.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  const upcomingEvents = filteredEvents.filter(e => e.status === "upcoming");
  const pastEvents = filteredEvents.filter(e => e.status === "past");

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
              Upcoming{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Join us for inspiring workshops, networking opportunities, and
              community-building events designed to support your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="panel">Panel</SelectItem>
                <SelectItem value="program">Program</SelectItem>
                <SelectItem value="service">Service</SelectItem>
                <SelectItem value="gala">Gala</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 border-2 hover:border-accent/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="p-8 space-y-6">
                  {/* Event Type Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                      {event.type}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-accent shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-accent shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow group/btn">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">
              Past{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Events
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 hover:border-muted transition-all duration-500 opacity-75 hover:opacity-100"
                >
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {event.type}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {event.attendees} attended
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">{event.title}</h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Have an Event Idea?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              We're always looking for new ways to engage our community. Share your
              suggestions with us!
            </p>
            <Button
              size="lg"
              className="bg-gold text-gold-foreground hover:shadow-gold transition-all hover:scale-105"
            >
              Suggest an Event
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

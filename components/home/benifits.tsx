import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield, Target, BookOpen } from "lucide-react";

export const Benifits = ({ visibleSections }: any) => {
  return (
    <>
      <section
        className={`py-20 bg-gradient-to-br from-muted/30 to-background transition-all duration-1000 ${
          visibleSections.has("timeline")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Who Should Join?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Students",
                  desc: "Classes 9-12",
                  color: "text-blue-500",
                },
                {
                  icon: Users,
                  title: "College Students",
                  desc: "All streams welcome",
                  color: "text-green-500",
                },
                {
                  icon: Target,
                  title: "Beginners",
                  desc: "New to ethical hacking",
                  color: "text-purple-500",
                },
                {
                  icon: Award,
                  title: "Certification Seekers",
                  desc: "CEH/eJPT aspirants",
                  color: "text-yellow-500",
                },
                {
                  icon: Shield,
                  title: "Security Enthusiasts",
                  desc: "Curious about cybersecurity",
                  color: "text-red-500",
                },
                {
                  icon: Clock,
                  title: "Working Professionals",
                  desc: "Weekend learners",
                  color: "text-indigo-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <item.icon
                        className={`h-16 w-16 ${item.color} mx-auto group-hover:animate-bounce`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What You'll Get
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Hands-on Skill Training",
                  desc: "Practical labs and real-world scenarios",
                  color: "text-blue-500",
                },
                {
                  icon: Shield,
                  title: "Real-world Exploits Practice",
                  desc: "Safe environment to practice attacks",
                  color: "text-green-500",
                },
                {
                  icon: Award,
                  title: "Certificate of Completion",
                  desc: "Industry-recognized certification",
                  color: "text-yellow-500",
                },
                {
                  icon: Users,
                  title: "Personal Mentorship",
                  desc: "Direct guidance from instructor",
                  color: "text-purple-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <item.icon
                          className={`h-12 w-12 ${item.color} flex-shrink-0 mt-2 group-hover:animate-pulse`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

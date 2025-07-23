import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target } from "lucide-react";

const About = ({ visibleSections }: any) => {
  return (
    <section
      id="about"
      className={`py-20 transition-all duration-1000 ${
        visibleSections.has("about")
          ? "animate-fade-in-up"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Pranshu
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="mr-3 h-6 w-6 text-primary animate-pulse" />
                  Certifications & Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  {[
                    "eJPT Certified Ethical Hacker",
                    "2+ Years' Experience",
                    "Linux & Exploitation Specialist",
                    "Founder of Sarvodaya Security",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center animate-slide-in-right"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="mr-3 h-6 w-6 text-secondary animate-spin-slow" />
                  Teaching Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-left leading-relaxed">
                  Passionate about teaching ethical hacking from scratch,
                  focusing on building protectors rather than just exploiters.
                  Every student becomes a guardian of digital security.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/30 hover:scale-105 transition-all duration-500 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <blockquote className="text-xl md:text-2xl italic leading-relaxed">
                "This is more than a course — it's your first real step into the
                world of cybersecurity. My goal is to make you someone who can
                protect, not just exploit — to help you truly understand."
              </blockquote>
              <cite className="block mt-6 text-primary font-bold text-lg">
                — Pranshu Jha
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

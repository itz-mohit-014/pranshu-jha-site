import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { timeline } from "@/mocks/timeline";
import { Card, CardContent } from "../ui/card";

const Timeline = ({ visibleSections }: any) => {
  const [timelineExpanded, setTimelineExpanded] = useState(false);

  return (
    <section
      id="timeline"
      className={`py-20 transition-all duration-1000 ${
        visibleSections.has("timeline")
          ? "animate-fade-in-up"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              12-Week Weekend Learning Plan
            </h2>
            <Button
              onClick={() => setTimelineExpanded(!timelineExpanded)}
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300"
            >
              {timelineExpanded ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5" />
                  Collapse Timeline
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5" />
                  Expand All Weeks
                </>
              )}
            </Button>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full transform -translate-x-1/2 z-0"></div>

            <div
              className={`space-y-6 transition-all duration-1000 ${
                timelineExpanded ? "max-h-none" : "max-h-[34rem] overflow-hidden"
              }`}
            >
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative md:flex ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div
                      className={`md:w-1/2 ${
                        isLeft ? "md:pr-8" : "md:pl-8"
                      } relative z-10`}
                    >
                      <Card className="bg-gradient-to-r from-card/50 to-card backdrop-blur-sm border border-primary/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white font-bold rounded-full flex items-center justify-center shadow-md">
                              {item.week}
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-primary">
                              Week {item.week}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-base leading-relaxed">
                            {item.topics}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Dot and Line */}
                    <div className={`absolute left-3 top-1 md:left-1/2 md:top-8 transform -translate-x-1/2 z-20`}>
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-md relative">
                        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40"></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!timelineExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

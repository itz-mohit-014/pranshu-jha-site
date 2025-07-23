import { courseModules } from "@/mocks/courseModules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const CourseModules = ({ visibleSections }: any) => {
  return (
    <section
      id="courses"
      className={`py-20 bg-gradient-to-br from-muted/30 to-background transition-all duration-1000 ${
        visibleSections.has("courses")
          ? "animate-fade-in-up"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Course Modules
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {courseModules.map((module, index) => {
              const subpoints = module.content
                .split(/[-•]+|,|\n/)
                .map((point) => point.trim())
                .filter((point) => point.length > 0);

              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-primary/20 rounded-xl px-6 hover:border-primary/40 transition-all duration-300 bg-gradient-to-r from-card/50 to-card backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center w-full">
                      <div className="flex items-center space-x-4">
                        <Badge
                          variant="outline"
                          className="min-w-fit px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </Badge>
                        <module.icon className="h-6 w-6 text-primary animate-pulse" />
                        <span className="font-semibold text-lg">
                          {module.title}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-16">
                    <ul className="list-disc space-y-2 text-muted-foreground text-base leading-relaxed">
                      {subpoints.map((point, i) => (
                        <li key={i} className="ml-4">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;

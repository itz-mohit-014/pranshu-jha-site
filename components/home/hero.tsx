import {
  ChevronDown,
  Download,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { scrollToSection } from "@/hooks/scrollToSection";
import { useToast } from "@/hooks/use-toast";

const Hero = ({setIsMenuOpen}:any) => {
  const { toast } = useToast();

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Sarvodaya_Security_brochure_by_Priyanshu_Jha.pdf";
    link.download = "Sarvodaya_Security_brochure_by_Priyanshu_Jha.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started! 📄",
      description: "Course brochure is being downloaded.",
    });
  };

  return (
    <section className="pt-24 pb-20 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full mx-auto border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Pranshu Jha"
                className="h-full w-full object-cover object-[50%_20%]"
                />
                </div>
              <div className="absolute inset-0 w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse mx-auto"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-bounce">
                <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Pranshu Jha
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-in-up delay-300">
              Ethical Hacking & Cybersecurity Trainer
            </h2>
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl mb-10 text-primary font-semibold animate-pulse">
                "Join the battlefield of ethical hackers. Learn, master, and
                protect!"
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl rounded-lg"></div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-in-up delay-500">
            {[
              {
                icon: MessageCircle,
                href: "https://wa.me/919801709469",
                color: "text-green-500",
              },
              {
                icon: Mail,
                href: "mailto:cyberpranshu127.0.0.1@gmail.com",
                color: "text-blue-500",
              },
              {
                icon: Instagram,
                href: "https://instagram.com/cyberpranshu_official",
                color: "text-pink-500",
              },
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 bg-transparent"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className={`h-6 w-6 ${social.color}`} />
                </a>
              </Button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up delay-700">
            <Button
              size="lg"
              onClick={() =>{ 
                scrollToSection("courses");
                setIsMenuOpen(false);
              }}
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25"
            >
              Enroll Now
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={downloadPDF}
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

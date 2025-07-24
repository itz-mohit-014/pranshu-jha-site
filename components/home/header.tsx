import { Menu, Moon, Shield, Sun, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { scrollToSection } from "@/hooks/scrollToSection";

export const Header = ({isMenuOpen, setIsMenuOpen, isDark, setIsDark}:any) => {

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 animate-slide-in-left">
          <div className="relative">
            <img className="w-10 animate-pulse" src="/logo.png" alt="logo"/>
            {/* <Shield className="h-8 w-8 text-primary animate-pulse" /> */}
            <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-md animate-ping"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sarvodaya Security
          </span>
        </div>

        <nav className="hidden md:flex space-x-6">
          {["about", "courses", "timeline", "contact"].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
              className="hover:text-primary transition-all duration-300 hover:scale-105 capitalize animate-slide-in-down"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {section}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4 animate-slide-in-right">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform"
          >
            {isDark ? (
              <Sun className="h-5 w-5 animate-spin-slow" />
            ) : (
              <Moon className="h-5 w-5 animate-bounce" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-slide-in-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["about", "courses", "timeline", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false);
                }}
                className="text-left hover:text-primary transition-colors capitalize hover:translate-x-2 duration-300"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

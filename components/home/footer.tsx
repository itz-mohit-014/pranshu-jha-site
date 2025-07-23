import { Instagram, Mail, MessageCircle, Shield } from "lucide-react"
import { Button } from "../ui/button"
import { scrollToSection } from "@/hooks/scrollToSection"

const Footer = ({ setIsMenuOpen }:any) => {

  return (
         <footer className="bg-gradient-to-r from-muted/50 to-background py-16 border-t border-border/50">
             <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto text-center">
                 <div className="flex justify-center items-center space-x-3 mb-8">
                   <div className="relative">
                     <Shield className="h-10 w-10 text-primary animate-pulse" />
                     <div className="absolute inset-0 h-10 w-10 bg-primary/20 rounded-full blur-md animate-ping"></div>
                   </div>
                   <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                     Sarvodaya Security
                   </span>
                 </div>
   
                 <div className="flex justify-center space-x-8 mb-8">
                   {["about", "courses", "timeline", "contact"].map((section) => (
                     <button
                       key={section}
                       onClick={() =>{ 
                        scrollToSection(section)
                        setIsMenuOpen(false)
                       }}
                       className="hover:text-primary transition-all duration-300 capitalize hover:scale-110 text-lg"
                     >
                       {section}
                     </button>
                   ))}
                 </div>
   
                 <div className="flex justify-center space-x-6 mb-8">
                   {[
                     { icon: MessageCircle, href: "https://wa.me/919801709469", color: "hover:text-green-500" },
                     { icon: Mail, href: "mailto:cyberpranshu127.0.0.1@gmail.com", color: "hover:text-blue-500" },
                     {
                       icon: Instagram,
                       href: "https://instagram.com/cyberpranshu_official",
                       color: "hover:text-pink-500",
                     },
                   ].map((social, index) => (
                     <Button
                       key={index}
                       variant="ghost"
                       size="icon"
                       asChild
                       className={`hover:scale-125 transition-all duration-300 ${social.color}`}
                     >
                       <a href={social.href} target="_blank" rel="noopener noreferrer">
                         <social.icon className="h-6 w-6" />
                       </a>
                     </Button>
                   ))}
                 </div>
   
                 <p className="text-muted-foreground text-lg">
                   © {new Date().getFullYear()} Pranshu Jha. All rights reserved.
                 </p>
               </div>
             </div>
           </footer>
   
  )
}

export default Footer
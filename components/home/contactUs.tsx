import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactUs = ({ visibleSections }: any) => {
  const GOOGLE_APPS_SCRIPT_WEB_URL =
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_URL!;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_APPS_SCRIPT_WEB_URL, {
        method: "POST",
        mode: "no-cors", // Google Script requires this
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Message Sent Successfully! 🚀",
        description:
          "Thank you for your interest. Pranshu will get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 transition-all duration-1000 ${
        visibleSections.has("contact")
          ? "animate-fade-in-up"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact & Enroll
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Get in touch to learn more about the course or to enroll
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 text-base"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 text-base"
                  />
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="h-12 text-base"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="text-base"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 text-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-secondary"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Alternative Contact</CardTitle>
                <CardDescription className="text-base">
                  Reach out directly through these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    color: "text-green-500",
                    title: "WhatsApp",
                    value: "+91 9801709469",
                    href: "https://wa.me/919801709469",
                  },
                  {
                    icon: Mail,
                    color: "text-blue-500",
                    title: "Email",
                    value: "cyberpranshu127.0.0.1@gmail.com",
                    href: "mailto:cyberpranshu127.0.0.1@gmail.com",
                  },
                  {
                    icon: Instagram,
                    color: "text-pink-500",
                    title: "Instagram",
                    value: "@cyberpranshu_official",
                    href: "https://instagram.com/cyberpranshu_official",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <contact.icon
                      className={`h-6 w-6 ${contact.color} group-hover:animate-bounce`}
                    />
                    <div>
                      <p className="font-bold text-lg">{contact.title}</p>
                      <a
                        href={contact.href}
                        className="text-primary hover:underline text-base hover:scale-105 transition-transform inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-lg mb-4">Schedule & Format</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "Weekend Only - Saturday & Sunday",
                      "1.5 to 2 hours per session",
                      "Online",
                      "Language: Hindi + English Mix",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

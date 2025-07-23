"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Mail,
  Instagram,
  MessageCircle,
  Award,
  Users,
  Clock,
  Shield,
  Target,
  BookOpen,
  Star,
  Send,
  Download,
  ChevronUp,
  Play,
  Zap,
  Code,
  Lock,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function CybersecurityInstructorSite() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [timelineExpanded, setTimelineExpanded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      console.log("Form submitted:", formData)

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for your interest. Pranshu will get back to you soon.",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  const downloadPDF = () => {
    const link = document.createElement("a")
    link.href = "/cybersecurity-course-brochure.pdf"
    link.download = "Cybersecurity-Course-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Download Started! 📄",
      description: "Course brochure is being downloaded.",
    })
  }

  const courseModules = [
    {
      title: "Basics of Hacking & Cyber Ethics",
      content:
        "Types of Hackers, Attack Vectors, CIA Triad - Understanding the fundamental concepts and ethical boundaries in cybersecurity.",
      icon: Shield,
    },
    {
      title: "Linux Command Line & File System Mastery",
      content: "Master Linux commands, file permissions, and system navigation essential for ethical hacking.",
      icon: Code,
    },
    {
      title: "Active & Passive Footprinting",
      content: "Learn reconnaissance techniques to gather information about targets using various tools and methods.",
      icon: Eye,
    },
    {
      title: "Port Scanning & Network Reconnaissance",
      content: "Master Nmap and other scanning tools to identify open ports and services on target systems.",
      icon: Target,
    },
    {
      title: "Service Enumeration",
      content: "Deep dive into FTP, SSH, SMB enumeration techniques to identify vulnerabilities.",
      icon: Lock,
    },
    {
      title: "Exploiting Vulnerable Services",
      content: "Hands-on practice with Metasploitable 2 to understand real-world exploitation techniques.",
      icon: Zap,
    },
    {
      title: "Payload Generation & Shell Access",
      content: "Learn msfvenom for payload creation and techniques for gaining reverse shells.",
      icon: Play,
    },
    {
      title: "Privilege Escalation",
      content: "Master SUID exploitation and kernel exploits to escalate privileges on compromised systems.",
      icon: Award,
    },
    {
      title: "Web Application Attacks",
      content: "Comprehensive coverage of XSS, SQLi, LFI, and file upload bypass techniques.",
      icon: BookOpen,
    },
    {
      title: "Wi-Fi Hacking",
      content: "Learn WPA2 cracking, Evil Twin attacks using airodump-ng and aircrack-ng tools.",
      icon: Shield,
    },
    {
      title: "Android Pentesting",
      content: "APK reverse engineering and payload injection techniques for mobile security testing.",
      icon: Target,
    },
    {
      title: "Advanced Techniques",
      content: "Buffer overflow basics, payload encoding for AV bypass, and digital forensics fundamentals.",
      icon: Zap,
    },
  ]

  const timeline = [
    { week: 1, topics: "Introduction to Hacking, Cyber Laws, CIA Model" },
    { week: 2, topics: "Linux Basics, Commands, Permissions" },
    { week: 3, topics: "Footprinting (Active & Passive), OSINT" },
    { week: 4, topics: "Nmap & Enumeration of Services" },
    { week: 5, topics: "Vulnerability Analysis, Searchsploit, CVEs" },
    { week: 6, topics: "Exploiting FTP/SSH + Netcat Shell" },
    { week: 7, topics: "TTY Upgrade, Privilege Escalation Basics" },
    { week: 8, topics: "SQL Injection, XSS, File Upload Bypass" },
    { week: 9, topics: "Wi-Fi Hacking (Handshake + Evil Twin)" },
    { week: 10, topics: "Android Pentesting, APK Payloads" },
    { week: 11, topics: "Buffer Overflow (demo), Payload Encoding, Ngrok" },
    { week: 12, topics: "CTF Challenge + Report Writing & Guidance" },
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "Complete Ethical Hacking Course",
      review:
        "Pranshu sir's teaching method is exceptional. The hands-on approach helped me understand complex concepts easily. Now I'm confident in my cybersecurity skills!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Priya Patel",
      course: "Weekend Batch Graduate",
      review:
        "Best investment I made for my career. The course structure is perfect for beginners, and the practical labs are amazing. Highly recommended!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Amit Kumar",
      course: "eJPT Preparation",
      review:
        "Thanks to Pranshu sir's guidance, I cleared my eJPT certification. The real-world scenarios and CTF challenges prepared me well for the exam.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-background via-background to-primary/5 text-foreground relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 transition-all duration-300">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary animate-pulse" />
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
                  onClick={() => scrollToSection(section)}
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
                {isDark ? <Sun className="h-5 w-5 animate-spin-slow" /> : <Moon className="h-5 w-5 animate-bounce" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:scale-110 transition-transform"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                    onClick={() => scrollToSection(section)}
                    className="text-left hover:text-primary transition-colors capitalize hover:translate-x-2 duration-300"
                  >
                    {section}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 animate-fade-in-up">
                <div className="relative inline-block mb-8">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Pranshu Jha"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse mx-auto"></div>
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
                    "Join the battlefield of ethical hackers. Learn, master, and protect!"
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl rounded-lg"></div>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mb-12 animate-slide-in-up delay-500">
                {[
                  { icon: MessageCircle, href: "https://wa.me/919801709469", color: "text-green-500" },
                  { icon: Mail, href: "mailto:cyberpranshu127.0.0.1@gmail.com", color: "text-blue-500" },
                  { icon: Instagram, href: "https://instagram.com/cyberpranshu_official", color: "text-pink-500" },
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
                  onClick={() => scrollToSection("courses")}
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

        {/* About Section */}
        <section
          id="about"
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
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
                      Passionate about teaching ethical hacking from scratch, focusing on building protectors rather
                      than just exploiters. Every student becomes a guardian of digital security.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/30 hover:scale-105 transition-all duration-500 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <blockquote className="text-xl md:text-2xl italic leading-relaxed">
                    "This is more than a course — it's your first real step into the world of cybersecurity. My goal is
                    to make you someone who can protect, not just exploit — to help you truly understand."
                  </blockquote>
                  <cite className="block mt-6 text-primary font-bold text-lg">— Pranshu Jha</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section
          id="courses"
          className={`py-20 bg-gradient-to-br from-muted/30 to-background transition-all duration-1000 ${
            visibleSections.has("courses") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Course Modules
              </h2>

              <Accordion type="single" collapsible className="space-y-6">
                {courseModules.map((module, index) => (
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
                          <span className="font-semibold text-lg">{module.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <p className="text-muted-foreground leading-relaxed text-base pl-16">{module.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id="timeline"
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has("timeline") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
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
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

                <div
                  className={`space-y-6 transition-all duration-1000 ${
                    timelineExpanded ? "max-h-none" : "max-h-96 overflow-hidden"
                  }`}
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {timeline.map((item, index) => (
                    <Card
                      key={index}
                      className="ml-16 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-r from-card/80 to-card backdrop-blur-sm border-primary/20 relative"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg">
                        <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping"></div>
                      </div>

                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg hover:scale-110 transition-transform">
                              {item.week}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold text-xl mb-3 text-primary">Week {item.week}</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">{item.topics}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {!timelineExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Join Section */}
        <section
          className={`py-20 bg-gradient-to-br from-muted/30 to-background transition-all duration-1000 ${
            visibleSections.has("timeline") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Who Should Join?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: BookOpen, title: "Students", desc: "Classes 9-12", color: "text-blue-500" },
                  { icon: Users, title: "College Students", desc: "All streams welcome", color: "text-green-500" },
                  { icon: Target, title: "Beginners", desc: "New to ethical hacking", color: "text-purple-500" },
                  { icon: Award, title: "Certification Seekers", desc: "CEH/eJPT aspirants", color: "text-yellow-500" },
                  {
                    icon: Shield,
                    title: "Security Enthusiasts",
                    desc: "Curious about cybersecurity",
                    color: "text-red-500",
                  },
                  { icon: Clock, title: "Working Professionals", desc: "Weekend learners", color: "text-indigo-500" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20 group"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <item.icon className={`h-16 w-16 ${item.color} mx-auto group-hover:animate-bounce`} />
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

        {/* What You'll Get Section */}
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
                          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Student Testimonials
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/20 group"
                  >
                    <CardContent className="p-8">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current group-hover:animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.review}"</p>
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-primary/30 hover:scale-110 transition-transform"
                        />
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-20 transition-all duration-1000 ${
            visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 text-base"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 text-base"
                      />
                      <Input
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-12 text-base"
                      />
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="text-base"
                      />
                      <Button
                        type="submit"
                        className="w-full h-12 text-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-secondary"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Alternative Contact</CardTitle>
                    <CardDescription className="text-base">Reach out directly through these channels</CardDescription>
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
                      <div key={index} className="flex items-center space-x-4 group">
                        <contact.icon className={`h-6 w-6 ${contact.color} group-hover:animate-bounce`} />
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
                          "Online / Offline (select cities)",
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

        {/* Footer */}
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
                    onClick={() => scrollToSection(section)}
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

        <Toaster />
      </div>
    </div>
  )
}
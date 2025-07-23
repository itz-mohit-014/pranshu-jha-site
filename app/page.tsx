"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/home/header"
import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import CourseModules from "@/components/home/courseModules"
import Timeline from "@/components/home/timeline"
import { Benifits } from "@/components/home/benifits"
import { Testimonials } from "@/components/home/testimonials"
import { ContactUs } from "@/components/home/contactUs"
import Footer from "@/components/home/footer"

export default function CybersecurityInstructorSite() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

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

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-background via-background to-primary/5 text-foreground relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDark={isDark} setIsDark={setIsDark}/>
        <Hero isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <About visibleSections={visibleSections}/>
        <CourseModules visibleSections={visibleSections}/>
        <Timeline visibleSections={visibleSections}/>
        <Benifits visibleSections={visibleSections}/>
        <Testimonials/>
        <ContactUs visibleSections={visibleSections}/>
        <Footer setIsMenuOpen={setIsMenuOpen}/>
        <Toaster />
      </div>
    </div>
  )
}

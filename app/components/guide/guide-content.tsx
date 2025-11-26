"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { TableOfContents } from "./table-of-contents"
import { Introduction } from "./sections/introduction"
import { BestPractices } from "./sections/best-practices"
import { Fundamentals } from "./sections/fundamentals"
import { UseCases } from "./sections/use-cases"
import { translations } from "./translations"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

interface GuideContentProps {
  language: "en" | "nl"
}

export function GuideContent({ language }: GuideContentProps) {
  const t = translations[language]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div id="guide-content" className="min-h-screen bg-background text-foreground relative z-10">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 print:py-0">
        <div className="mx-auto max-w-4xl">
          {/* Title Page for Print */}
          <AnimatedSection className="mb-16 text-center print:mb-0 print:flex print:h-screen print:flex-col print:items-center print:justify-center">
            {/* Logo for print - hidden on screen */}
            <div className="hidden print:block print:mb-8">
              <img src="/hvg-logo-light.svg" alt="HVG Logo" className="w-20 h-auto mx-auto" />
            </div>

            <p className="mb-4 text-sm uppercase tracking-widest text-foreground/60 print:text-neutral-500">
              {t.subtitle}
            </p>
            <h2 className="mb-6 font-sentient text-5xl font-extralight tracking-tight print:text-6xl print:text-neutral-900">
              {t.mainTitle}
            </h2>
            <p className="text-lg text-foreground/70 print:text-neutral-600">{t.tagline}</p>

            {/* Print button */}
            <Button
              onClick={handlePrint}
              variant="outline"
              className="mt-8 mx-auto flex items-center gap-2 print:hidden"
            >
              <Printer className="h-4 w-4" />
              {language === "en" ? "Print Guide" : "Promptgids Afdrukken"}
            </Button>
          </AnimatedSection>

          {/* Table of Contents */}
          <AnimatedSection delay={100}>
            <TableOfContents language={language} />
          </AnimatedSection>

          {/* Sections */}
          <AnimatedSection delay={200}>
            <Introduction language={language} />
          </AnimatedSection>
          <AnimatedSection>
            <BestPractices language={language} />
          </AnimatedSection>
          <AnimatedSection>
            <Fundamentals language={language} />
          </AnimatedSection>
          <AnimatedSection>
            <UseCases language={language} />
          </AnimatedSection>

        </div>
      </main>
    </div>
  )
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} print:!opacity-100 print:!translate-y-0`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

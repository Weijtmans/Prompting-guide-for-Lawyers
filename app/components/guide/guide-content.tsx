"use client"

import type React from "react"

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
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

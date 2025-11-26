"use client"

import { SectionHeader } from "../section-header"
import { TechniqueCard } from "../technique-card"
import { translations } from "../translations"

interface FundamentalsProps {
  language: "en" | "nl"
}

export function Fundamentals({ language }: FundamentalsProps) {
  const t = translations[language].fundamentals

  return (
    <section className="mb-16">
      <SectionHeader id="fundamentals" title={t.title} subtitle={t.subtitle} />

      <div className="space-y-6">
        {t.techniques.map((technique, index) => (
          <TechniqueCard
            key={index}
            title={technique.title}
            whenToUse={technique.whenToUse}
            examplePrompt={technique.examplePrompt}
            dos={technique.dos}
            donts={technique.donts}
            why={technique.why}
            language={language}
          />
        ))}
      </div>
    </section>
  )
}

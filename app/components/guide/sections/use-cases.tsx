"use client"

import { SectionHeader } from "../section-header"
import { TechniqueCard } from "../technique-card"
import { translations } from "../translations"

interface UseCasesProps {
  language: "en" | "nl"
}

export function UseCases({ language }: UseCasesProps) {
  const t = translations[language].useCases

  const categories = [
    { id: "contracts", number: "1", data: t.contracts },
    { id: "research", number: "2", data: t.research },
    { id: "litigation", number: "3", data: t.litigation },
    { id: "communication", number: "4", data: t.communication },
    { id: "strategy", number: "5", data: t.strategy },
  ]

  return (
    <section className="mb-16">
      <SectionHeader id="use-cases" title={t.title} subtitle={t.subtitle} />

      {categories.map((category) => (
        <div key={category.id} className="mb-12">
          <h3
            id={category.id}
            className="mb-6 scroll-mt-24 border-l-4 border-primary pl-4 text-xl font-semibold print:border-amber-500 print:text-neutral-800"
          >
            <span className="mr-2 text-primary print:text-amber-600">{category.number}.</span>
            {category.data.title}
          </h3>

          <div className="space-y-6">
            {category.data.techniques.map((technique, index) => (
              <TechniqueCard
                key={index}
                title={technique.title}
                whenToUse={technique.whenToUse}
                examplePrompt={technique.examplePrompt}
                dos={technique.dos}
                donts={technique.donts}
                why={technique.why}
                attachmentRequired={technique.attachmentRequired}
                language={language}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

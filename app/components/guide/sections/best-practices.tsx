"use client"

import { SectionHeader } from "../section-header"
import { ProTip } from "../pro-tip"
import { translations } from "../translations"

interface BestPracticesProps {
  language: "en" | "nl"
}

export function BestPractices({ language }: BestPracticesProps) {
  const t = translations[language].bestPractices

  return (
    <section className="mb-16">
      <SectionHeader id="best-practices" title={t.title} subtitle={t.subtitle} />

      <div className="mb-8">
        <p className="leading-relaxed text-foreground/80 print:text-neutral-700">{t.content}</p>
      </div>

      <div className="space-y-4">
        {t.tips.map((tip, index) => (
          <ProTip key={index} title={tip.title} content={tip.content} />
        ))}
      </div>
    </section>
  )
}

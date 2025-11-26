"use client"

import { translations } from "./translations"

interface TableOfContentsProps {
  language: "en" | "nl"
}

export function TableOfContents({ language }: TableOfContentsProps) {
  const t = translations[language]

  const sections = [
    { id: "introduction", title: t.toc.introduction, page: "1" },
    { id: "best-practices", title: t.toc.bestPractices, page: "2" },
    { id: "fundamentals", title: t.toc.fundamentals, page: "4" },
    {
      id: "use-cases",
      title: t.toc.useCases,
      page: "6",
      subsections: [
        { id: "contracts", title: t.toc.contracts, page: "6" },
        { id: "research", title: t.toc.research, page: "10" },
        { id: "litigation", title: t.toc.litigation, page: "13" },
        { id: "communication", title: t.toc.communication, page: "16" },
        { id: "strategy", title: t.toc.strategy, page: "19" },
      ],
    },
  ]

  return (
    <nav className="mb-16 rounded-lg border border-border bg-foreground/5 p-8 print:mb-8 print:break-after-page print:border-neutral-200 print:bg-neutral-50">
      <h3 className="mb-6 text-lg font-semibold uppercase tracking-widest text-primary print:text-amber-600">
        {t.toc.title}
      </h3>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex items-baseline justify-between text-foreground/80 transition-colors hover:text-primary print:text-neutral-700"
            >
              <span className="font-medium">{section.title}</span>
              <span className="mx-2 flex-1 border-b border-dotted border-foreground/20 print:border-neutral-300" />
              <span className="text-sm text-foreground/50 print:text-neutral-500">{section.page}</span>
            </a>
            {section.subsections && (
              <ul className="ml-6 mt-2 space-y-2">
                {section.subsections.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href={`#${sub.id}`}
                      className="group flex items-baseline justify-between text-sm text-foreground/60 transition-colors hover:text-primary print:text-neutral-600"
                    >
                      <span>{sub.title}</span>
                      <span className="mx-2 flex-1 border-b border-dotted border-foreground/10 print:border-neutral-200" />
                      <span className="text-foreground/40 print:text-neutral-400">{sub.page}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

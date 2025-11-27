"use client"

import { WarningBox } from "../warning-box"
import { SectionHeader } from "../section-header"
import { translations } from "../translations"

interface IntroductionProps {
  language: "en" | "nl"
}

export function Introduction({ language }: IntroductionProps) {
  const t = translations[language].introduction

  const warningContent = (
    <>
      <p>{language === "nl"
        ? "AI-tools zoals ChatGPT, Claude en Gemini zijn niet gemaakt voor juridisch onderzoek. Zij hebben namelijk geen toegang tot rechtsbronnen (zoals actuele Nederlandse wet- en regelgeving of jurisprudentie). Bij vragen over specifieke wetsartikelen, uitspraken of regelgeving bestaat een groot risico op hallucinaties: de AI verzint dan overtuigend klinkende maar feitelijk onjuiste informatie."
        : "AI tools like ChatGPT, Claude, and Gemini are not designed for legal research. They do not have access to legal sources (such as current laws, regulations, or case law). When asking about specific articles, rulings, or regulations, there is a high risk of hallucinations: the AI invents convincingly sounding but factually incorrect information."
      }</p>
      <p>{language === "nl"
        ? "Voor betrouwbaar juridisch onderzoek heb je twee opties:"
        : "For reliable legal research, you have two options:"
      }</p>
      <ol className="list-decimal list-inside space-y-2 ml-2">
        <li>{language === "nl"
          ? "Voeg zelf de relevante wetteksten, jurisprudentie of andere juridische bronnen als bijlage toe aan je prompt, zodat de AI alleen kan putten uit betrouwbaar materiaal"
          : "Attach the relevant legal texts, case law, or other legal sources to your prompt yourself, so the AI can only draw from reliable material"
        }</li>
        <li>
          {language === "nl" ? (
            <>
              Gebruik een gespecialiseerde juridische AI-tool die toegang heeft tot actuele juridische databases (zoals{" "}
              <a href="https://andri.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Andri
              </a>
              {" "}of{" "}
              <a href="https://zeno.law" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Zeno
              </a>
              )
            </>
          ) : (
            <>
              Use a specialized legal AI tool that has access to current legal databases (such as{" "}
              <a href="https://andri.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Andri
              </a>
              {" "}or{" "}
              <a href="https://zeno.law" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Zeno
              </a>
              )
            </>
          )}
        </li>
      </ol>
      <p className="font-semibold">{language === "nl"
        ? "Vertrouw nooit blind op AI-output bij juridische vragen zonder deze te verifiëren met betrouwbare bronnen."
        : "Never blindly trust AI output for legal questions without verifying it with reliable sources."
      }</p>
    </>
  )

  return (
    <section className="mb-16">
      <SectionHeader id="introduction" title={t.title} />

      <div className="prose prose-invert max-w-none print:prose-neutral">
        <p className="text-lg leading-relaxed text-foreground/80 print:text-neutral-700">{t.content}</p>
      </div>

      <div className="mt-8">
        <WarningBox title={t.warningTitle} content={warningContent} />
      </div>
    </section>
  )
}

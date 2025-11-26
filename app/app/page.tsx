"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { GuideContent } from "@/components/guide/guide-content"
import { GuideHero } from "@/components/guide/guide-hero"
import Script from "next/script"

const Leva = dynamic(() => import("leva").then((mod) => mod.Leva), {
  ssr: false,
})

export default function Home() {
  const [language, setLanguage] = useState<"en" | "nl">("nl")

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (!browserLang.startsWith("nl")) {
      setLanguage("en")
    }
  }, [])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Prompting gids voor juridische professionals",
    "description": "Leer effectief prompten met AI-tools zoals ChatGPT en Claude voor juridisch werk. Praktische technieken voor contractanalyse, juridisch onderzoek, processtukken en cliëntcommunicatie.",
    "keywords": "AI prompting, juristen, advocaten, ChatGPT, Claude, juridisch onderzoek, contractanalyse",
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "HVG",
      "url": "https://hvglaw.nl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HVG",
      "url": "https://hvglaw.nl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prompting.hvglaw.nl/hvg-logo.svg"
      }
    },
    "inLanguage": "nl-NL",
    "about": {
      "@type": "Thing",
      "name": "Artificial Intelligence voor juridische professionals"
    },
    "educationalLevel": "Professional",
    "teaches": [
      "Single shot prompting",
      "Few shot prompting",
      "Chain of thought prompting",
      "Persona prompting",
      "IRAC framework",
      "SATO framework",
      "Document analyse met AI"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Juridische professionals, advocaten, juristen"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prompting.hvglaw.nl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Prompting gids",
        "item": "https://prompting.hvglaw.nl"
      }
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HVG",
    "url": "https://hvglaw.nl",
    "logo": "https://prompting.hvglaw.nl/hvg-logo.svg",
    "description": "Juridische dienstverlening en advies"
  }

  return (
    <>
      <Script
        id="structured-data-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-data-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <GuideHero language={language} onLanguageChange={setLanguage} />
      <GuideContent language={language} />
      {process.env.NODE_ENV === "development" && <Leva hidden />}
    </>
  )
}

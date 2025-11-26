"use client"

import { useState, useEffect } from "react"
import { GuideContent } from "@/components/guide/guide-content"
import { GuideHero } from "@/components/guide/guide-hero"
import { Leva } from "leva"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "nl">("en")

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("nl")) {
      setLanguage("nl")
    } else {
      setLanguage("en")
    }
  }, [])

  return (
    <>
      <GuideHero language={language} onLanguageChange={setLanguage} />
      <GuideContent language={language} />
      <Leva hidden />
    </>
  )
}

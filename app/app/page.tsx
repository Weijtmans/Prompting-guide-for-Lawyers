"use client"

import { useState } from "react"
import { GuideContent } from "@/components/guide/guide-content"
import { GuideHero } from "@/components/guide/guide-hero"
import { Header } from "@/components/header"
import { Leva } from "leva"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "nl">("en")

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} showPrint />
      <GuideHero language={language} />
      <GuideContent language={language} onLanguageChange={setLanguage} />
      <Leva hidden />
    </>
  )
}

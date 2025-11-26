"use client"

import { useState } from "react"
import { GL } from "@/components/gl"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"

interface GuideHeroProps {
  language: "en" | "nl"
}

export function GuideHero({ language }: GuideHeroProps) {
  const [hovering, setHovering] = useState(false)

  const scrollToContent = () => {
    const content = document.getElementById("guide-content")
    if (content) {
      const yOffset = content.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: yOffset, behavior: "smooth" })
    }
  }

  return (
    <div className="relative flex flex-col h-svh overflow-hidden print:hidden">
      <GL hovering={hovering} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-4">
        {/* Logo above title */}
        <div className="mb-8">
          <Logo className="w-20 h-auto" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          {language === "en" ? (
            <>
              AI Prompting for <br />
              <i className="font-light">Legal</i> Professionals
            </>
          ) : (
            <>
              AI Prompting voor <br />
              <i className="font-light">Juridische</i> Professionals
            </>
          )}
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          {language === "en"
            ? "Master the art of effective AI communication to enhance your legal practice"
            : "Beheers de kunst van effectieve AI-communicatie om uw juridische praktijk te verbeteren"}
        </p>

        <Button
          className="mt-14 max-sm:hidden"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={scrollToContent}
        >
          {language === "en" ? "[Read Guide]" : "[Lees Promptgids]"}
        </Button>
        <Button
          size="sm"
          className="mt-14 sm:hidden"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={scrollToContent}
        >
          {language === "en" ? "[Read Guide]" : "[Lees Promptgids]"}
        </Button>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to content"
      >
        <ChevronDown className="size-6 text-foreground/40 hover:text-primary transition-colors" />
      </button>
    </div>
  )
}

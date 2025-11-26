"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { LanguageSwitcher } from "./guide/language-switcher"
import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  language: "en" | "nl"
  onLanguageChange: (lang: "en" | "nl") => void
  showPrint?: boolean
}

export const Header = ({ language, onLanguageChange, showPrint = false }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show full header when scrolled past the hero section (increased threshold to prevent overlap)
      setScrolled(window.scrollY > window.innerHeight * 0.95)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Minimal header - language switcher only (always visible) */}
      <div className={`fixed z-50 top-6 right-6 print:hidden transition-opacity duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
      </div>

      {/* Full header - with logo and controls (appears on scroll) */}
      <div className={`fixed z-50 top-0 left-0 w-full print:hidden transition-all duration-300 ${!scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <header className="flex items-center justify-between container py-4 px-6 gap-6 bg-background/60 backdrop-blur-md border-b border-white/5">
          {/* Left: Logo and Print button */}
          <div className="flex items-center gap-3 md:gap-4 pointer-events-auto flex-shrink-0">
            <Link href="/" className="pointer-events-auto flex-shrink-0">
              <Logo className="w-14 h-auto" />
            </Link>
            {showPrint && (
              <Button
                size="sm"
                onClick={handlePrint}
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground bg-transparent border-transparent shadow-none"
              >
                <Printer className="h-4 w-4" />
                <span className="hidden md:inline">{language === "en" ? "Print" : "Afdrukken"}</span>
              </Button>
            )}
          </div>

          {/* Right: Language switcher */}
          <div className="pointer-events-auto flex-shrink-0">
            <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
          </div>
        </header>
      </div>
    </>
  )
}

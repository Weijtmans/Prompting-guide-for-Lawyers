"use client"

interface LanguageSwitcherProps {
  language: "en" | "nl"
  onLanguageChange: (lang: "en" | "nl") => void
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1 print:hidden">
      <button
        onClick={() => onLanguageChange("nl")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
          language === "nl" ? "bg-primary text-background" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        NL
      </button>
      <span className="text-foreground/30">⇄</span>
      <button
        onClick={() => onLanguageChange("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
          language === "en" ? "bg-primary text-background" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}

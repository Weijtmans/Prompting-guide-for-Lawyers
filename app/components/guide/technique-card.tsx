"use client"

import { useState } from "react"
import { Paperclip, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TechniqueCardProps {
  title: string
  whenToUse: string
  examplePrompt: string
  dos?: string[]
  donts?: string[]
  why?: string
  attachmentRequired?: boolean
  language: "en" | "nl"
}

export function TechniqueCard({
  title,
  whenToUse,
  examplePrompt,
  dos,
  donts,
  why,
  attachmentRequired,
  language,
}: TechniqueCardProps) {
  const [copied, setCopied] = useState(false)

  const labels = {
    en: {
      whenToUse: "When to use",
      examplePrompt: "Example Prompt",
      dos: "Do",
      donts: "Don't",
      why: "Why this works",
      attachment: "Attachment Required",
      copy: "Copy",
      copied: "Copied!",
    },
    nl: {
      whenToUse: "Wanneer te gebruiken",
      examplePrompt: "Voorbeeldprompt",
      dos: "Wel",
      donts: "Niet",
      why: "Waarom dit werkt",
      attachment: "Bijlage vereist",
      copy: "Kopieer",
      copied: "Gekopieerd!",
    },
  }

  const t = labels[language]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(examplePrompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <article className="mb-10 rounded-lg border border-border bg-foreground/[0.02] p-6 transition-colors print:mb-6 print:break-inside-avoid print:border-neutral-200 print:bg-white">
      {/* Header */}
      <header className="mb-4 flex items-start justify-between gap-4">
        <h4 className="text-xl font-bold text-primary print:text-amber-600">{title}</h4>
        {attachmentRequired && (
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary print:bg-amber-50 print:text-amber-700">
            <Paperclip className="h-3 w-3" />
            {t.attachment}
          </span>
        )}
      </header>

      {/* When to use */}
      <div className="mb-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground/50 print:text-neutral-500">
          {t.whenToUse}
        </p>
        <p className="text-foreground/80 print:text-neutral-700">{whenToUse}</p>
      </div>

      {/* Example Prompt */}
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 print:text-neutral-500">
            {t.examplePrompt}
          </p>
          <Button
            onClick={handleCopy}
            variant="ghost"
            size="sm"
            className="h-7 gap-1.5 print:hidden"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                {t.copied}
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                {t.copy}
              </>
            )}
          </Button>
        </div>
        <pre className="rounded-md border border-border bg-background p-4 font-mono text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-words print:border-neutral-200 print:bg-neutral-50 print:text-neutral-800">
          {examplePrompt}
        </pre>
      </div>

      {/* Do's and Don'ts */}
      {(dos && dos.length > 0) || (donts && donts.length > 0) ? (
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          {dos && dos.length > 0 && (
            <div className="rounded-md border border-green-500/20 bg-green-500/5 p-4 print:border-green-200 print:bg-green-50">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-400 print:text-green-700">
                {t.dos}
              </p>
              <ul className="space-y-1 text-sm text-foreground/80 print:text-neutral-700">
                {dos.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-green-400 print:text-green-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {donts && donts.length > 0 && (
            <div className="rounded-md border border-red-500/20 bg-red-500/5 p-4 print:border-red-200 print:bg-red-50">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-400 print:text-red-700">
                {t.donts}
              </p>
              <ul className="space-y-1 text-sm text-foreground/80 print:text-neutral-700">
                {donts.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-red-400 print:text-red-600">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : null}

      {/* Why */}
      {why && (
        <div className="rounded-md border border-primary/20 bg-primary/5 p-4 print:border-amber-200 print:bg-amber-50">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary print:text-amber-700">
            {t.why}
          </p>
          <p className="text-sm text-foreground/80 print:text-neutral-700">{why}</p>
        </div>
      )}
    </article>
  )
}

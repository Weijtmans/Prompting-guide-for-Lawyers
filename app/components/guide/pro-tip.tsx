"use client"

import { Lightbulb } from "lucide-react"

interface ProTipProps {
  title: string
  content: string
}

export function ProTip({ title, content }: ProTipProps) {
  return (
    <div className="mb-6 flex gap-4 rounded-lg border border-primary/30 bg-primary/5 p-5 print:border-amber-200 print:bg-amber-50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 print:bg-amber-100">
        <Lightbulb className="h-5 w-5 text-primary print:text-amber-600" />
      </div>
      <div>
        <h4 className="mb-1 font-semibold text-primary print:text-amber-700">{title}</h4>
        <p className="text-sm leading-relaxed text-foreground/80 print:text-neutral-700">{content}</p>
      </div>
    </div>
  )
}

"use client"

import { AlertTriangle } from "lucide-react"

interface WarningBoxProps {
  title: string
  content: React.ReactNode
}

export function WarningBox({ title, content }: WarningBoxProps) {
  return (
    <div className="mb-10 rounded-lg border-2 border-red-500/50 bg-red-500/10 p-6 print:border-red-300 print:bg-red-50">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/20 print:bg-red-100">
          <AlertTriangle className="h-6 w-6 text-red-400 print:text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="mb-3 text-lg font-bold text-red-400 print:text-red-700">{title}</h3>
          <div className="space-y-3 leading-relaxed text-foreground/80 print:text-neutral-700">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

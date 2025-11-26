"use client"

interface SectionHeaderProps {
  id: string
  number?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ id, number, title, subtitle }: SectionHeaderProps) {
  return (
    <header id={id} className="mb-8 scroll-mt-24 print:break-before-page print:pt-8">
      <div className="mb-2 flex items-center gap-3">
        {number && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-background print:bg-amber-500">
            {number}
          </span>
        )}
        <h2 className="font-sentient text-3xl font-extralight tracking-tight print:text-neutral-900">{title}</h2>
      </div>
      {subtitle && <p className="text-foreground/60 print:text-neutral-500">{subtitle}</p>}
      <div className="mt-4 h-px bg-gradient-to-r from-primary/50 to-transparent print:from-amber-300" />
    </header>
  )
}

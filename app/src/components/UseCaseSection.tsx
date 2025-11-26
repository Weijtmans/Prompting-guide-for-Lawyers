import { type LucideIcon, Copy, Check } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface UseCaseItemConfig {
    key: string
    icon: LucideIcon
    translationKey: string // e.g., 'irac'
}

export interface UseCaseSectionProps {
    id: string
    title: string
    description: string
    icon: LucideIcon
    iconColorClass: string // e.g., 'text-blue-600 dark:text-blue-400'
    iconBgClass: string // e.g., 'bg-blue-100 dark:bg-blue-900/30'
    items: UseCaseItemConfig[]
}

export default function UseCaseSection({
    id,
    title,
    description,
    icon: Icon,
    iconColorClass,
    iconBgClass,
    items
}: UseCaseSectionProps) {
    const { t } = useLanguage()

    return (
        <section id={id} className="mb-16 scroll-mt-20 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
                <div className={cn("p-2 rounded-lg", iconBgClass)}>
                    <Icon className={cn("h-6 w-6", iconColorClass)} />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h2>
            </div>

            <p className="mb-10 text-sm text-muted-foreground leading-6">
                {description}
            </p>

            <div className="space-y-10">
                {items.map((item) => (
                    <UseCaseCard
                        key={item.key}
                        baseTranslationKey={`useCases.${id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}.${item.translationKey}`}
                    />
                ))}
            </div>
        </section>
    )
}

function UseCaseCard({ baseTranslationKey }: { baseTranslationKey: string }) {
    const { t } = useLanguage()
    const [copied, setCopied] = useState(false)

    // Helper to safely get nested translations
    const getField = (field: string) => {
        const val = t(`${baseTranslationKey}.${field}`)
        return val === `${baseTranslationKey}.${field}` ? null : val
    }

    const title = t(`${baseTranslationKey}.title`)
    const subtitle = getField('subtitle')
    const example = getField('example')
    const why = getField('why')
    const tip = getField('tip')

    // Handle nested objects like 'concise' in constraints or 'judge' in persona
    const isNested = typeof example === 'object' && example !== null

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="border-b last:border-b-0 pb-10 last:pb-0">
            <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                    <h3 className="text-lg font-medium mb-1">{title}</h3>
                    {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
                </div>
            </div>

            {example && !isNested && (
                <div className="bg-muted/50 rounded-lg p-4 mb-4 relative group/code">
                    <button
                        onClick={() => handleCopy(example)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 opacity-0 group-hover/code:opacity-100 transition-opacity hover:bg-background border shadow-sm"
                        title={t('common.copy') || 'Copy'}
                    >
                        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
                    </button>
                    <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/90">
                        {example}
                    </pre>
                </div>
            )}

            {/* Handle special nested cases like 'constraints' or 'persona' */}
            {isNested && (
                <div className="space-y-4 mb-4">
                    {Object.entries(example).map(([key, val]: [string, any]) => (
                        <div key={key} className="bg-muted/50 rounded-lg p-4 relative group/code">
                            <button
                                onClick={() => handleCopy(val.example)}
                                className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 opacity-0 group-hover/code:opacity-100 transition-opacity hover:bg-background border shadow-sm"
                                title={t('common.copy') || 'Copy'}
                            >
                                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
                            </button>
                            <p className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">{val.title}</p>
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/90">
                                {val.example}
                            </pre>
                        </div>
                    ))}
                </div>
            )}

            {(why || tip) && (
                <div className="flex gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">
                        {why ? t('common.why') : t('common.tip')}:
                    </span>
                    <span>{why || tip}</span>
                </div>
            )}
        </div>
    )
}

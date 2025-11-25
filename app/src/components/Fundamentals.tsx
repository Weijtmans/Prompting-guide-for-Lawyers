import { Paperclip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/context/LanguageContext'

export default function Fundamentals() {
    const { t } = useLanguage()
    const techniques = t('fundamentals.techniques')

    return (
        <section id="fundamentals" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                {t('fundamentals.title')}
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                {t('fundamentals.desc')}
            </p>

            <div className="space-y-10">
                {techniques.map((technique: any, index: number) => (
                    <div key={index} className="border-b last:border-b-0 pb-10 last:pb-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-lg font-medium">
                                {technique.title}
                            </h3>
                            {technique.title.includes('Single shot') || technique.title.includes('Few shot') || technique.title.includes('Chained') || technique.title.includes('Chain of thought') ? (
                                <Badge variant="secondary" className="gap-1.5 whitespace-nowrap">
                                    <Paperclip className="h-3 w-3" />
                                    {t('common.attachmentRequired')}
                                </Badge>
                            ) : null}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-6">
                            {technique.desc}
                        </p>

                        {(technique.title.includes('Single shot') || technique.title.includes('Few shot') || technique.title.includes('Chained') || technique.title.includes('Chain of thought')) && (
                            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-3 flex gap-2 mb-4">
                                <Paperclip className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-900 dark:text-amber-100">
                                    <strong>{t('common.tip')}:</strong> {t('common.attachmentTip')}
                                </p>
                            </div>
                        )}

                        <div className="bg-muted/50 rounded-lg p-4 mb-4">
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {technique.example}
                            </pre>
                        </div>

                        {technique.dos && technique.donts && (
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="rounded-lg border bg-card p-4">
                                    <h4 className="font-medium mb-3">✓ {t('common.dos')}</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {technique.dos.map((item: string, idx: number) => (
                                            <li key={idx} className="leading-relaxed">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-lg border bg-card p-4">
                                    <h4 className="font-medium mb-3">✗ {t('common.donts')}</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {technique.donts.map((item: string, idx: number) => (
                                            <li key={idx} className="leading-relaxed">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

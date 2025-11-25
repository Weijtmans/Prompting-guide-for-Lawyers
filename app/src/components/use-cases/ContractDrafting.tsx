import { Layers, Scissors, CheckSquare, List, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/context/LanguageContext'

export default function ContractDrafting() {
    const { t } = useLanguage()
    const section = t('useCases.contractDrafting')

    return (
        <section id="contract-drafting" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Layers className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                </h2>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
                {section.desc}
            </p>

            <div className="grid gap-8">
                {/* Document Chunking */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.chunking.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.chunking.subtitle}</p>
                        </div>
                        <Scissors className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="flex gap-2 mb-4">
                        {section.chunking.tags.map((tag: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.chunking.example}
                        </pre>
                    </div>
                </div>

                {/* Confirm and Continue */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.confirm.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.confirm.subtitle}</p>
                        </div>
                        <CheckSquare className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.confirm.example}
                        </pre>
                    </div>
                </div>

                {/* MECE */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.mece.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.mece.subtitle}</p>
                        </div>
                        <List className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.mece.example}
                        </pre>
                    </div>
                </div>

                {/* Output Constraints */}
                <div className="border rounded-xl p-6 bg-card">
                    <h3 className="text-lg font-medium mb-1">{section.constraints.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{section.constraints.subtitle}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">{section.constraints.concise.title}</p>
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {section.constraints.concise.example}
                            </pre>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">{section.constraints.direct.title}</p>
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {section.constraints.direct.example}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Footnotes Assistant */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.footnotes.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.footnotes.subtitle}</p>
                        </div>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.footnotes.example}
                        </pre>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-3 flex gap-2">
                        <Badge variant="secondary" className="h-fit whitespace-nowrap">{t('common.attachmentRequired')}</Badge>
                        <p className="text-sm text-amber-900 dark:text-amber-100">
                            {section.footnotes.attachment}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


import { Brain, Search, Scale, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function LegalResearch() {
    const { t } = useLanguage()
    const section = t('useCases.legalResearch')

    return (
        <section id="legal-research" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                </h2>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
                {section.desc}
            </p>

            <div className="grid gap-8">
                {/* IRAC */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.irac.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.irac.subtitle}</p>
                        </div>
                        <Scale className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.irac.example}
                        </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        <strong>{t('common.why')}:</strong> {section.irac.why}
                    </p>
                </div>

                {/* Step Back */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.stepBack.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.stepBack.subtitle}</p>
                        </div>
                        <Search className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.stepBack.example}
                        </pre>
                    </div>
                </div>

                {/* 5W1H */}
                <div className="border rounded-xl p-6 bg-card">
                    <h3 className="text-lg font-medium mb-1">{section.fiveW.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{section.fiveW.subtitle}</p>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.fiveW.example}
                        </pre>
                    </div>
                </div>

                {/* Bias Awareness */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.bias.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.bias.subtitle}</p>
                        </div>
                        <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.bias.example}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

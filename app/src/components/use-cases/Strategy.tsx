import { Brain, Lightbulb, HelpCircle, RefreshCw, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Strategy() {
    const { t } = useLanguage()
    const section = t('useCases.strategy')

    return (
        <section id="strategy" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Brain className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                </h2>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
                {section.desc}
            </p>

            <div className="grid gap-8">
                {/* Brainstorming */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.brainstorm.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.brainstorm.subtitle}</p>
                        </div>
                        <Lightbulb className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.brainstorm.example}
                        </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        <strong>{t('common.tip')}:</strong> {section.brainstorm.tip}
                    </p>
                </div>

                {/* Questions Up Front */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.questions.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.questions.subtitle}</p>
                        </div>
                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.questions.example}
                        </pre>
                    </div>
                </div>

                {/* Perspective Switching */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.perspective.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.perspective.subtitle}</p>
                        </div>
                        <RefreshCw className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.perspective.example}
                        </pre>
                    </div>
                </div>

                {/* Meta-prompting */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.meta.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.meta.subtitle}</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.meta.example}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

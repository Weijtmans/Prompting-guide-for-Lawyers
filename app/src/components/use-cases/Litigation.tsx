import { Gavel, GitMerge, Users, Shield, ListOrdered } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Litigation() {
    const { t } = useLanguage()
    const section = t('useCases.litigation')

    return (
        <section id="litigation" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Gavel className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                </h2>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
                {section.desc}
            </p>

            <div className="grid gap-8">
                {/* SATO Framework */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.sato.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.sato.subtitle}</p>
                        </div>
                        <GitMerge className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.sato.example}
                        </pre>
                    </div>
                </div>

                {/* Devil's Advocate */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.devil.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.devil.subtitle}</p>
                        </div>
                        <Shield className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.devil.example}
                        </pre>
                    </div>
                </div>

                {/* Persona Prompting */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.persona.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.persona.subtitle}</p>
                        </div>
                        <Users className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">{section.persona.judge.title}</p>
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {section.persona.judge.example}
                            </pre>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                            <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wider">{section.persona.opponent.title}</p>
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {section.persona.opponent.example}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Step by Step */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.stepByStep.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.stepByStep.subtitle}</p>
                        </div>
                        <ListOrdered className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.stepByStep.example}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

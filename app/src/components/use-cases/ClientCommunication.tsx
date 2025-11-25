import { MessageSquare, RefreshCw, Users, Layout, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ClientCommunication() {
    const { t } = useLanguage()
    const section = t('useCases.clientCommunication')

    return (
        <section id="client-communication" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                </h2>
            </div>

            <p className="mb-8 text-muted-foreground leading-relaxed">
                {section.desc}
            </p>

            <div className="grid gap-8">
                {/* Audience & Tone */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.audience.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.audience.subtitle}</p>
                        </div>
                        <Users className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.audience.example}
                        </pre>
                    </div>
                </div>

                {/* ELI5 */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.eli5.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.eli5.subtitle}</p>
                        </div>
                        <RefreshCw className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.eli5.example}
                        </pre>
                    </div>
                </div>

                {/* Pyramid Principle */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.pyramid.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.pyramid.subtitle}</p>
                        </div>
                        <Layout className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.pyramid.example}
                        </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        <strong>{t('common.why')}:</strong> {section.pyramid.why}
                    </p>
                </div>

                {/* DGR Framework */}
                <div className="border rounded-xl p-6 bg-card">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-medium mb-1">{section.dgr.title}</h3>
                            <p className="text-sm text-muted-foreground">{section.dgr.subtitle}</p>
                        </div>
                        <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {section.dgr.example}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface TacticItem {
    id: number
    title: string
    description: string
    example: string
    dos?: string[]
    donts?: string[]
}

export default function PromptTactics() {
    const audienceTactics: TacticItem[] = [
        {
            id: 13,
            title: 'Informele uitnodiging per (Whats)app',
            description: 'Wanneer te gebruiken: voor informele communicatie waarbij je een specifieke toon wilt zetten.',
            example: 'Toon: vriendelijk, informeel, met een knipoog.\nTaalgebruik: spreektaal, korte zinnen, emoji\'s beperkt toegestaan.'
        },
        {
            id: 14,
            title: 'Brief namens een VvE aan bewoners',
            description: 'Wanneer te gebruiken: voor formele maar toegankelijke communicatie.',
            example: 'Toon: zakelijk en informatief, neutraal, beleefd, wel aanzetten tot besluit.\nTaalgebruik: helder, menselijk, zonder vakjargon.'
        }
    ]

    const outputConstraints: TacticItem[] = [
        {
            id: 15,
            title: 'Maximaal drie alinea\'s',
            description: 'Wanneer te gebruiken: voor kort, beknopt advies.',
            example: 'Vat deze analyse samen in maximaal drie alinea\'s.'
        },
        {
            id: 16,
            title: 'Schrijf niet meer dan 250 woorden',
            description: 'Wanneer te gebruiken: voor strakke wordcount beperkingen.',
            example: 'Geef je advies in maximaal 250 woorden.'
        },
        {
            id: 17,
            title: 'Geef het in opsommingstekens zonder inleiding',
            description: 'Wanneer te gebruiken: voor directe, to-the-point output.',
            example: 'Lijst de belangrijkste punten op in opsommingstekens, zonder inleiding.'
        }
    ]

    const formatSpecification: TacticItem[] = [
        {
            id: 18,
            title: 'Genummerde lijst met kopjes per item',
            description: 'Wanneer te gebruiken: voor gestructureerde output met overzicht.',
            example: 'Maak een genummerde lijst met per punt een eigen kopje.'
        },
        {
            id: 19,
            title: 'Tabel met kolommen A, B, C',
            description: 'Wanneer te gebruiken: voor vergelijkingen of overzichten.',
            example: 'Zet je analyse in een tabel met kolommen: Risico | Impact | Maatregel.'
        },
        {
            id: 20,
            title: 'Bullet points met subpunten',
            description: 'Wanneer te gebruiken: voor hiërarchische informatie.',
            example: 'Structureer je antwoord met bullet points en subpunten waar nodig.'
        }
    ]

    const taskSpecification: TacticItem[] = [
        {
            id: 21,
            title: 'Identificeer de drie grootste risico\'s',
            description: 'Wanneer te gebruiken: voor focus op prioriteiten.',
            example: 'Identificeer de drie grootste risico\'s in deze overeenkomst.'
        },
        {
            id: 22,
            title: 'Vergelijk deze twee posities',
            description: 'Wanneer te gebruiken: voor analyse van standpunten.',
            example: 'Vergelijk het standpunt van partij A en partij B en analyseer de zwakke punten.'
        },
        {
            id: 23,
            title: 'Schrijf een e-mail die ... [specifieke doel]',
            description: 'Wanneer te gebruiken: voor gerichte output met duidelijk doel.',
            example: 'Schrijf een e-mail die de cliënt informeert over de risico\'s zonder hem onnodig ongerust te maken.'
        }
    ]

    const instructionCombination: TacticItem[] = [
        {
            id: 24,
            title: 'Combinatie van meerdere instructies',
            description: 'Wanneer te gebruiken: voor specifieke, gedetailleerde output.',
            example: `Je bent een ervaren huurrechtadvocaat.
Analyseer deze zaak stap voor stap.
Schrijf voor een niet-juridisch publiek.
Gebruik maximaal 300 woorden.
Geef concrete aanbevelingen in bullet points.`
        }
    ]

    const contextSpecification: TacticItem[] = [
        {
            id: 25,
            title: 'Achtergrondinformatie verstrekken',
            description: 'Wanneer te gebruiken: voor contextrijke analyses.',
            example: 'Context: Dit betreft een langlopend huurgeschil waarbij de huurder al twee keer schriftelijk is gewaarschuwd. Analyseer de positie van de verhuurder.'
        },
        {
            id: 26,
            title: 'Doelgroep definiëren',
            description: 'Wanneer te gebruiken: voor doelgroep-specifieke communicatie.',
            example: 'Publiek: bestuursleden zonder juridische achtergrond. Leg uit hoe de nieuwe wetgeving hen raakt.'
        }
    ]

    const documentChunking: TacticItem[] = [
        {
            id: 27,
            title: 'Groot document opsplitsen',
            description: 'Wanneer te gebruiken: voor analyse van grote documenten.',
            example: 'Deel dit document op in secties van max 20 pagina\'s. Analyseer elke sectie apart op [criterium]. Geef daarna een overall conclusie.',
            dos: ['Logische opdeling maken', 'Per chunk dezelfde vraag stellen', 'Eindsynthese maken'],
            donts: ['Geen te grote chunks (&gt;50 pagina\'s)', 'Niet te kleine chunks (<5 pagina\'s)', 'Geen inconsistente opdeling']
        }
    ]

    const renderSection = (title: string, items: TacticItem[]) => (
        <div className="mb-12">
            <h3 className="text-lg font-medium mb-6">{title}</h3>
            <div className="space-y-8">
                {items.map((item) => (
                    <div key={item.id} className="border-b last:border-b-0 pb-8 last:pb-0">
                        <h4 className="font-medium mb-2">
                            {item.id}. {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-6">
                            {item.description}
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4">
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {item.example}
                            </pre>
                        </div>
                        {item.dos && item.donts && (
                            <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
                                <div className="rounded-lg border bg-card p-4">
                                    <h5 className="font-medium mb-3">✓ Do's</h5>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {item.dos?.map((doItem: string, idx: number) => (
                                            <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: `• ${doItem}` }} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-lg border bg-card p-4">
                                    <h5 className="font-medium mb-3">✗ Don'ts</h5>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {item.donts?.map((dontItem: string, idx: number) => (
                                            <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: `• ${dontItem}` }} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <section id="prompttactieken" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Prompttactieken
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                Deze tactieken helpen je om de output van AI te sturen door specifieke instructies te geven over toon, publiek en structuur.
            </p>

            {renderSection('Audience specification & tone setting', audienceTactics)}
            {renderSection('Output constraints', outputConstraints)}
            {renderSection('Format specification', formatSpecification)}
            {renderSection('Task specification', taskSpecification)}
            {renderSection('Instruction combination', instructionCombination)}
            {renderSection('Context specification', contextSpecification)}
            {renderSection('Document chunking', documentChunking)}
        </section>
    )
}

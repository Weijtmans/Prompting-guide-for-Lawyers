export default function ReflectivePrompting() {
    const techniques = [
        {
            id: 51,
            title: 'Rationale prompting',
            description: 'Wanneer te gebruiken: als je wilt dat de AI zijn redenering transparant maakt.',
            example: `Leg per stap uit, vraag bijv:
- Waar baseer je dit op?
- Waarom past dit hier?
- Wat zou een ander zeggen?`
        },
        {
            id: 52,
            title: 'Explain reasoning – professionele context',
            description: 'Wanneer te gebruiken: voor diepere analyse van de onderbouwing.',
            example: `- Waar baseer je dit advies precies op?
- Wat zijn mogelijke alternatieven die je hebt overwogen?
- Welke aannames liggen onder je conclusie?`
        },
        {
            id: 53,
            title: 'Explain reasoning – juridische voorbeelden',
            description: 'Wanneer te gebruiken: om juridische termen en concepten te verduidelijken.',
            example: `- Wat bedoel je precies met verhaalsmogelijkheden?
- Welke wetsartikelen vallen onder deze relevante wetgeving?
- Wat wordt hier verstaan onder een redelijke termijn?`
        },
        {
            id: 54,
            title: 'Perspectiefwisseling',
            description: 'Wanneer te gebruiken: om alle betrokken partijen te begrijpen in een conflict of onderhandeling.',
            example: 'Analyseer dit conflict afzonderlijk vanuit de grootaandeelhouders, de kleinere aandeelhouders en het bestuur.',
            dos: ['Vraag om elk perspectief apart', 'Laat belangen identificeren', 'Vergelijk perspectieven aan het eind'],
            donts: ['Niet alle perspectieven door elkaar', 'Geen bias naar één perspectief', 'Niet alleen oppervlakkig bekijken']
        },
        {
            id: 55,
            title: 'Alternatieve interpretatie',
            description: 'Wanneer te gebruiken: om onderliggende motivaties en werkelijke belangen te onderzoeken.',
            example: 'Gaat het vooral om macht en invloed, of verschillen ze echt van mening over waar het bedrijf naartoe moet?'
        },
        {
            id: 56,
            title: 'Compare answers',
            description: 'Wanneer te gebruiken: om verschillende juridische strategieën systematisch te vergelijken.',
            example: `Geef twee manieren om dit geschil over bouwvertraging aan te pakken:

1. Contractuele boetebepaling inroepen.
2. Schadevergoeding vorderen op grond van wanprestatie.

Vergelijk beide op juridische haalbaarheid, financiële gevolgen, risico's en succeskans.`,
            dos: ['Geef duidelijke vergelijkingscriteria', 'Vraag om voor- en nadelen', 'Laat een conclusie trekken'],
            donts: ['Niet te veel opties (max 3-4)', 'Geen onduidelijke criteria', 'Niet zonder conclusie/advies']
        },
        {
            id: 57,
            title: 'Bias-awareness & critical reflection',
            description: 'Wanneer te gebruiken: om aannames en mogelijke vooroordelen in analyses te identificeren.',
            example: `- Welke aannames maak je over het gedrag van de ondernemer?
- Zijn die aannames eerlijk en juridisch goed onderbouwd?
- Is er ruimte voor een andere lezing?`
        },
        {
            id: 58,
            title: 'Devil\'s advocate prompting',
            description: 'Wanneer te gebruiken: om zwakke plekken in je strategie of advies te identificeren.',
            example: `Bekijk dit advies voor herstructurering:

- Welke risico's zijn onderschat of te optimistisch?
- Wie zou bezwaar kunnen maken, en op welke gronden?
- Welk relevant scenario is nog niet meegenomen?`,
            dos: ['Vraag expliciet om kritische blik', 'Laat zwakke punten identificeren', 'Vraag om tegenargumenten'],
            donts: ['Niet defensief worden', 'Geen kritiek negeren', 'Niet alleen bevestiging zoeken']
        }
    ]

    return (
        <section id="reflective" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Reflective prompting
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                Technieken om de AI kritisch te laten nadenken over zijn eigen output en verschillende perspectieven te verkennen.
            </p>

            <div className="space-y-10">
                {techniques.map((technique) => (
                    <div key={technique.id} className="border-b last:border-b-0 pb-10 last:pb-0">
                        <h3 className="text-lg font-medium mb-2">
                            {technique.id}. {technique.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-6">
                            {technique.description}
                        </p>

                        <div className="bg-muted/50 rounded-lg p-4 mb-4">
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {technique.example}
                            </pre>
                        </div>

                        {technique.dos && technique.donts && (
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="rounded-lg border bg-card p-4">
                                    <h4 className="font-medium mb-3">✓ Do's</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {technique.dos.map((item, idx) => (
                                            <li key={idx} className="leading-relaxed">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-lg border bg-card p-4">
                                    <h4 className="font-medium mb-3">✗ Don'ts</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {technique.donts.map((item, idx) => (
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

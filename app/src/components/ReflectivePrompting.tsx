import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReflectivePrompting() {
    const techniques = [
        {
            id: 30,
            title: 'Rationale prompting',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: als je wilt dat de AI zijn redenering transparant maakt.',
            example: `Leg per stap uit, vraag bijv:
- Waar baseer je dit op?
- Waarom past dit hier?
- Wat zou een ander zeggen?`
        },
        {
            id: 31,
            title: 'Explain reasoning – professionele context',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor diepere analyse van de onderbouwing.',
            example: `- Waar baseer je dit advies precies op?
- Wat zijn mogelijke alternatieven die je hebt overwogen?
- Welke aannames liggen onder je conclusie?`
        },
        {
            id: 32,
            title: 'Explain reasoning – juridische voorbeelden',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: om juridische termen en concepten te verduidelijken.',
            example: `- Wat bedoel je precies met verhaalsmogelijkheden?
- Welke wetsartikelen vallen onder deze relevante wetgeving?
- Wat wordt hier verstaan onder een redelijke termijn?`
        },
        {
            id: 33,
            title: 'Perspectiefwisseling',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: om alle betrokken partijen te begrijpen in een conflict of onderhandeling.',
            example: 'Analyseer dit conflict afzonderlijk vanuit de grootaandeelhouders, de kleinere aandeelhouders en het bestuur.',
            dos: ['Vraag om elk perspectief apart', 'Laat belangen identificeren', 'Vergelijk perspectieven aan het eind'],
            donts: ['Niet alle perspectieven door elkaar', 'Geen bias naar één perspectief', 'Niet alleen oppervlakkig bekijken']
        },
        {
            id: 34,
            title: 'Alternatieve interpretatie',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: om onderliggende motivaties en werkelijke belangen te onderzoeken.',
            example: 'Gaat het vooral om macht en invloed, of verschillen ze echt van mening over waar het bedrijf naartoe moet?'
        },
        {
            id: 35,
            title: 'Compare answers',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: om verschillende juridische strategieën systematisch te vergelijken.',
            example: `Geef twee manieren om dit geschil over bouwvertraging aan te pakken:

1. Contractuele boetebepaling inroepen.
2. Schadevergoeding vorderen op grond van wanprestatie.

Vergelijk beide op juridische haalbaarheid, financiële gevolgen, risico's en succeskans.`,
            dos: ['Geef duidelijke vergelijkingscriteria', 'Vraag om voor- en nadelen', 'Laat een conclusie trekken'],
            donts: ['Niet te veel opties (max 3-4)', 'Geen onduidelijke criteria', 'Niet zonder conclusie/advies']
        },
        {
            id: 36,
            title: 'Bias-awareness & critical reflection',
            level: 'Gevorderd',
            description: 'Wanneer te gebruiken: om aannames en mogelijke vooroordelen in analyses te identificeren.',
            example: `- Welke aannames maak je over het gedrag van de ondernemer?
- Zijn die aannames eerlijk en juridisch goed onderbouwd?
- Is er ruimte voor een andere lezing?`
        },
        {
            id: 37,
            title: 'Devil\'s advocate prompting',
            level: 'Gevorderd',
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
        <section id="reflective" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Reflective prompting
            </h2>
            <p className="mb-6 text-muted-foreground">
                Technieken om de AI kritisch te laten nadenken over zijn eigen output en verschillende perspectieven te verkennen.
            </p>

            <div className="space-y-6">
                {techniques.map((technique) => (
                    <Card key={technique.id} className="technique-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl">
                                {technique.id}. {technique.title}
                            </CardTitle>
                            <CardDescription className="italic">
                                {technique.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                <pre className="whitespace-pre-wrap font-mono text-sm">
                                    {technique.example}
                                </pre>
                            </div>

                            {technique.dos && technique.donts && (
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">✅ Do's</h4>
                                        <ul className="space-y-1 text-sm">
                                            {technique.dos.map((item, idx) => (
                                                <li key={idx}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">❌ Don'ts</h4>
                                        <ul className="space-y-1 text-sm">
                                            {technique.donts.map((item, idx) => (
                                                <li key={idx}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}


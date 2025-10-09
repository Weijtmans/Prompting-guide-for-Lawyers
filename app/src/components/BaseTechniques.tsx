import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BaseTechniques() {
    const techniques = [
        {
            id: 1,
            title: 'Single shot prompting',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: voor eenvoudige, directe vragen zonder voorbeelden. Effectief voor taken die duidelijk zijn en weinig context vereisen.',
            example: 'Vat deze huurovereenkomst samen in 3 hoofdpunten.',
            dos: ['Wees specifiek over wat je wilt', 'Geef duidelijke output-verwachtingen', 'Gebruik voor eenvoudige, duidelijke taken'],
            donts: ['Geen vage of brede vragen', 'Niet voor complexe analyses gebruiken', 'Geen inconsistente format verwachten']
        },
        {
            id: 2,
            title: 'Few shot prompting',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: als je specifieke voorbeelden wilt geven van hoe de output eruit moet zien. Verhoogt de consistentie en kwaliteit aanzienlijk.',
            example: `Hier zie je hoe ik bepalingen uit een arbeidsovereenkomst samenvat:

1. Proeftijd: maximaal 1 maand, conform art. 7:652 lid 4 BW
2. Concurrentiebeding: geldig voor 12 maanden na einde dienstverband, geografisch beperkt tot Nederland

Vat nu de volgende bepaling op dezelfde manier samen: ....`,
            dos: ['Geef 2-5 concrete voorbeelden', 'Zorg voor consistentie in voorbeelden', 'Laat het gewenste format zien'],
            donts: ['Geen tegenstrijdige voorbeelden', 'Niet te veel voorbeelden (>5)', 'Geen voorbeelden van slechte kwaliteit']
        },
        {
            id: 3,
            title: 'Chained prompts / Multi-step',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor complexe taken die meerdere stappen vereisen. Deel het probleem op in beheersbare delen.',
            example: `Analyseer deze huurovereenkomst.
Identificeer risico's voor verhuurder.
Controleer op ongebruikelijke clausules.
Geef concrete implementatie-aanbevelingen.`,
            dos: ['Splits complexe taken op', 'Logische volgorde aanhouden', 'Elke stap duidelijk formuleren'],
            donts: ['Geen onlogische stappen-volgorde', 'Niet te veel stappen (max 5-6)', 'Geen afhankelijkheden overslaan']
        },
        {
            id: 4,
            title: 'Chain of thought prompting',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor complexe juridische analyses waarbij stapsgewijze redenering vereist is. Verbetert de kwaliteit van juridische conclusies.',
            example: `Analyseer dit ontslagdossier stap voor stap:

1. Identificeer eerst de juridische vraag.
2. Bepaal welke artikelen uit het BW van toepassing zijn.
3. Beoordeel of de procedure correct is gevolgd.
4. Pas de regels toe op de specifieke feiten.
5. Evalueer de kansen van beide partijen.
6. Trek een gemotiveerde conclusie.`,
            dos: ['Vraag expliciet om stapsgewijze redenering', 'Laat tussenstappen zien', 'Gebruik voor juridische analyses'],
            donts: ['Geen stappen overslaan toestaan', 'Niet voor simpele vragen gebruiken', 'Geen onduidelijke stappen-definities']
        },
        {
            id: 5,
            title: 'Step back prompting',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: om eerst bredere principes te identificeren voordat je in details duikt. Zorgt voor betere contextualisering.',
            example: `Voordat je deze juridische vraag beantwoordt, neem eerst een stap terug.

Welke bredere (juridische) principes zijn hier relevant?
- Wat is de maatschappelijke context van dit vraagstuk?
- Hoe past dit in de ontwikkeling van de rechtspraak?

Nu pas: geef je specifieke juridische analyse.`,
            dos: ['Begin met bredere context', 'Identificeer onderliggende principes', 'Zoom daarna in op details'],
            donts: ['Niet meteen naar conclusies springen', 'Geen context overslaan', 'Niet alleen details bekijken']
        },
        {
            id: 6,
            title: 'Persona prompting 1 – ervaren arbeidsrecht-advocaat',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: om de AI een specifieke rol en expertise te geven. Beïnvloedt de toon en diepgang van het antwoord.',
            example: 'Beantwoord mijn vragen als ervaren arbeidsrecht advocaat die deze zaak moet beoordelen. Welke aspecten vind je het meest relevant?',
            dos: ['Kies relevante expertise', 'Wees specifiek over de rol', 'Geef context aan de persona'],
            donts: ['Geen vage rollen ("expert")', 'Niet meerdere tegenstrijdige rollen', 'Geen irrelevante expertise vragen']
        },
        {
            id: 7,
            title: 'Persona prompting 2 – boze, zenuwachtige cliënt',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor rollenspellen of om je voor te bereiden op moeilijke gesprekken.',
            example: 'Reageer als een boze en zenuwachtige cliënt die de procesrisico\'s te laat tot zich heeft door laten dringen. Geef vervolgens een advies hoe diens advocaat zijn/haar eigen positie kan bewaken, maar ook goed kan adviseren.'
        },
        {
            id: 8,
            title: 'Persona prompting 3 – compliance officer',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor risicoanalyses vanuit een specifiek perspectief.',
            example: 'Denk als een compliance officer: welke regulatory risico\'s zie je?'
        },
        {
            id: 9,
            title: 'Brainstorm prompting 1 – team & verandering',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: voor creatieve ideegeneratie zonder directe besluitvorming.',
            example: `Brainstorm verschillende manieren om het team mee te krijgen in de volgende verandering: [voeg beschrijving verandering in].

Ik vind empatisch leiderschap en actiegerichtheid belangrijk, keuzes maken we later.`,
            dos: ['Vraag expliciet om brainstormen', 'Stel beslissing uit', 'Moedig creativiteit aan'],
            donts: ['Niet meteen om beslissing vragen', 'Geen beperkende criteria stellen', 'Niet kritisch zijn in deze fase']
        },
        {
            id: 10,
            title: 'Brainstorm prompting 2 – dienstdifferentiatie',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: voor strategische verkenning van mogelijkheden.',
            example: 'Brainstorm hoe we deze dienst verder kunnen onderscheiden t.o.v concurrent X. Maak geen beslissingen, geef alleen ideeën.'
        },
        {
            id: 11,
            title: 'Brainstorm prompting 3 – juridische benadering',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: voor het verkennen van juridische opties voordat je een strategie bepaalt.',
            example: 'Brainstorm juridische mogelijkheden voor dit geschil. Denk breed en creatief, haalbaarheid komt later.'
        }
    ]

    return (
        <section id="basistechnieken" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Basistechnieken
            </h2>
            <p className="mb-6 text-muted-foreground">
                Deze fundamentele technieken vormen de basis van effectief prompting. Ze zijn eenvoudig toe te passen en direct bruikbaar in de dagelijkse praktijk.
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


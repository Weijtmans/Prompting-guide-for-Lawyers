import { Paperclip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function BaseTechniques() {
    const techniques = [
        {
            id: 1,
            title: 'Single shot prompting',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: voor eenvoudige, directe vragen zonder voorbeelden. Effectief voor taken die duidelijk zijn en weinig context vereisen.',
            requiresAttachment: true,
            example: 'Vat deze huurovereenkomst samen in 3 hoofdpunten.',
            dos: ['Wees specifiek over wat je wilt', 'Geef duidelijke output-verwachtingen', 'Gebruik voor eenvoudige, duidelijke taken'],
            donts: ['Geen vage of brede vragen', 'Niet voor complexe analyses gebruiken', 'Geen inconsistente format verwachten']
        },
        {
            id: 2,
            title: 'Few shot prompting',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: als je specifieke voorbeelden wilt geven van hoe de output eruit moet zien. Verhoogt de consistentie en kwaliteit aanzienlijk.',
            requiresAttachment: true,
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
            requiresAttachment: true,
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
            requiresAttachment: true,
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
        },
        {
            id: 12,
            title: 'Meta-prompting',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: als je niet zeker weet hoe je je vraag het beste kunt formuleren. Laat de AI een betere prompt schrijven.',
            requiresAttachment: false,
            example: `Ik wil een grondige analyse van dit arbeidsconflict.

Voordat je de analyse maakt: schrijf eerst een gedetailleerde, gestructureerde prompt die ik zou moeten gebruiken om de beste mogelijk analyse te krijgen. Leg uit waarom deze prompt effectiever is.`,
            dos: ['Vraag om betere promptformulering', 'Laat de AI uitleggen waarom', 'Gebruik de verbeterde prompt'],
            donts: ['Niet bij simpele vragen', 'Geen oneindige loop van meta-prompts', 'Niet zonder de suggestie te beoordelen']
        }
    ]

    return (
        <section id="basistechnieken" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Basistechnieken
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                Deze fundamentele technieken vormen de basis van effectief prompting. Ze zijn eenvoudig toe te passen en direct bruikbaar in de dagelijkse praktijk.
            </p>

            <div className="space-y-10">
                {techniques.map((technique) => (
                    <div key={technique.id} className="border-b last:border-b-0 pb-10 last:pb-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-lg font-medium">
                                {technique.id}. {technique.title}
                            </h3>
                            {technique.requiresAttachment && (
                                <Badge variant="secondary" className="gap-1.5 whitespace-nowrap">
                                    <Paperclip className="h-3 w-3" />
                                    Bijlage vereist
                                </Badge>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-6">
                            {technique.description}
                        </p>

                        {technique.requiresAttachment && (
                            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-3 flex gap-2 mb-4">
                                <Paperclip className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-900 dark:text-amber-100">
                                    <strong>Bijlage:</strong> Voeg het document toe aan je prompt.
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


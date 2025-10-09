export default function Frameworks() {
    const legalFrameworks = [
        {
            id: 28,
            title: 'IRAC – Juridische analyse',
            subtitle: 'Issue, Rule, Application, Conclusion',
            description: 'Standaard voor juridische analyses: identificeer het probleem, bepaal de regel, pas toe en trek conclusie.',
            example: `Analyseer deze zaak volgens het IRAC-framework:
1. Issue: Wat is de juridische vraag?
2. Rule: Welke wettelijke regels zijn van toepassing?
3. Application: Hoe passen deze regels op deze specifieke feiten?
4. Conclusion: Wat is de juridische conclusie?`
        },
        {
            id: 29,
            title: 'DGR – Juridisch advies',
            subtitle: 'Deugdelijk, Gemotiveerd, Rechtskundig advies',
            description: 'Framework voor het geven van kwalitatief juridisch advies met goede onderbouwing.',
            example: `Geef advies volgens het DGR-framework over deze kwestie:

1. Deugdelijk: Wat zijn alle relevante feiten en omstandigheden?
2. Gemotiveerd: Onderbouw je advies met wetsartikelen en jurisprudentie
3. Rechtskundig: Wat is de juridisch correcte conclusie en wat raad je aan?`
        },
        {
            id: 30,
            title: 'SATO – Juridische stellingname',
            subtitle: 'Standpunt, Argument, Tegenargument, Oordeel',
            description: 'Voor het opbouwen van juridische argumentatie met aandacht voor tegenargumenten.',
            example: `Beoordeel deze zaak volgens het SATO-framework:

1. Standpunt: Wat is ons juridische standpunt?
2. Argument: Welke argumenten ondersteunen dit standpunt?
3. Tegenargument: Welke tegenargumenten zijn te verwachten?
4. Oordeel: Hoe weerleggen we de tegenargumenten en wat is de conclusie?`
        },
        {
            id: 31,
            title: 'MECE – Juridische structurering',
            subtitle: 'Mutually Exclusive, Collectively Exhaustive',
            description: 'Zorg dat je analyse volledig is en geen overlap heeft tussen categorieën.',
            example: `Analyseer dit contract volgens het MECE-principe:

Zorg dat je analyse:
- Mutually Exclusive: elke clausule valt in één categorie (geen overlap)
- Collectively Exhaustive: alle clausules zijn gedekt (volledig)

Categoriseer in: verplichtingen partijen, financieel, aansprakelijkheid, beëindiging, overig.`
        }
    ]

    const languageFrameworks = [
        {
            id: 32,
            title: 'ELI5 – Toegankelijke uitleg',
            subtitle: 'Explain Like I\'m 5',
            description: 'Leg complexe materie uit op begrijpelijke wijze, zonder te simplificeren.',
            example: 'Leg het concept van aansprakelijkheid bij productdefecten uit alsof je het aan iemand uitlegt zonder juridische achtergrond. Gebruik heldere taal en concrete voorbeelden.'
        },
        {
            id: 33,
            title: '5W1H – Feitelijke analyse',
            subtitle: 'Who, What, When, Where, Why, How',
            description: 'Zorg dat alle relevante vragen beantwoord worden in je analyse.',
            example: `Analyseer dit incident volgens het 5W1H-framework:

- Who: Wie zijn de betrokken partijen?
- What: Wat is er precies gebeurd?
- When: Wanneer vond dit plaats?
- Where: Waar heeft het plaatsgevonden?
- Why: Waarom is dit relevant/gebeurd?
- How: Hoe heeft dit zich afgespeeld?`
        },
        {
            id: 34,
            title: 'AIDA – Overtuigende communicatie',
            subtitle: 'Attention, Interest, Desire, Action',
            description: 'Voor communicatie die de ontvanger aanzet tot actie.',
            example: `Schrijf een brief aan de wederpartij volgens het AIDA-model:

1. Attention: Trek aandacht met een krachtige opening
2. Interest: Wek interesse door het probleem helder te schetsen
3. Desire: Creëer verlangen naar een oplossing
4. Action: Sluit af met een duidelijke call-to-action`
        },
        {
            id: 35,
            title: 'Pyramid principle – Rapportage',
            subtitle: 'Start met conclusie, onderbouw daarna',
            description: 'Efficiënte structuur voor adviezen: begin met je advies, leg daarna uit waarom.',
            example: `Schrijf een advies volgens het Pyramid Principle:

1. Begin met de conclusie/advies (wat moet de cliënt doen?)
2. Geef de belangrijkste argumenten (waarom?)
3. Werk elk argument uit met onderbouwing
4. Voeg ondersteunende details toe

Zo krijgt de lezer direct het antwoord en kan zelf bepalen hoe diep in te gaan.`
        },
        {
            id: 36,
            title: 'SCQA – Verhaal opbouwen',
            subtitle: 'Situation, Complication, Question, Answer',
            description: 'Voor heldere storytelling in adviezen en memo\'s.',
            example: `Structureer je memo volgens het SCQA-framework:

1. Situation: Schets de context en achtergrond
2. Complication: Wat is het probleem of de uitdaging?
3. Question: Welke vraag moet beantwoord worden?
4. Answer: Geef het antwoord met onderbouwing`
        }
    ]

    const renderFrameworks = (frameworks: typeof legalFrameworks) => (
        <div className="space-y-8">
            {frameworks.map((framework, idx) => (
                <div key={idx} className="border-b last:border-b-0 pb-8 last:pb-0">
                    <h4 className="font-medium mb-1">
                        {framework.id ? `${framework.id}. ` : ''}{framework.title}
                    </h4>
                    <p className="text-sm text-muted-foreground italic mb-2">{framework.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-3 leading-6">
                        {framework.description}
                    </p>
                    {framework.example && (
                        <div className="bg-muted/50 rounded-lg p-4">
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {framework.example}
                            </pre>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )

    return (
        <section id="frameworks" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Juridische & taalframeworks
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                Gevestigde frameworks uit de juridische en communicatieve wereld die je kunt gebruiken om structuur aan te brengen in je prompts.
            </p>

            <div className="space-y-12">
                <div>
                    <h3 className="text-lg font-medium mb-6">Juridische frameworks</h3>
                    {renderFrameworks(legalFrameworks)}
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-6">Algemene taalframeworks</h3>
                    {renderFrameworks(languageFrameworks)}
                </div>
            </div>
        </section>
    )
}

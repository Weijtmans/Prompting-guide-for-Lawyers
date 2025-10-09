import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CombinationTechniques() {
    const combinations = [
        {
            title: 'Few Shot + Chain of Thought',
            when: 'Complex juridisch document analyseren met consistente output',
            why: 'Few shot zorgt voor consistente format, Chain of thought voor diepgaande analyse',
            example: `Hier zie je hoe ik contractclausules analyseer:

Voorbeeld 1:
Clausule: "Partijen komen overeen dat..."
Analyse stap 1: Identificatie - dit is een wederzijdse afspraak
Analyse stap 2: Rechtsgrond - art. 6:217 BW (overeenkomst)
Analyse stap 3: Risico - geen, standaard formulering
Conclusie: Clausule is rechtsgeldig

Analyseer nu de volgende clausule op dezelfde manier, stap voor stap: [clausule]`
        },
        {
            title: 'Persona + IRAC Framework',
            when: 'Juridisch advies vanuit specifiek perspectief',
            why: 'Persona geeft expertise-niveau, IRAC zorgt voor gestructureerde analyse',
            example: `Je bent een ervaren procesadvocaat gespecialiseerd in verbintenissenrecht. Analyseer deze zaak volgens het IRAC-framework:

Issue: [juridische vraag]
Rule: Welke artikelen en jurisprudentie zijn relevant?
Application: Hoe past dit op de feiten?
Conclusion: Wat is je procesadvies?`
        },
        {
            title: 'Step Back + Devil\'s Advocate',
            when: 'Strategische beslissing nemen met risicobewustzijn',
            why: 'Step back geeft context, Devil\'s advocate identificeert zwakke plekken',
            example: `Voordat je dit juridisch advies geeft, neem eerst een stap terug:
- Wat zijn de bredere strategische implicaties?
- Wat zijn de onderliggende belangen van alle partijen?

Geef vervolgens je advies, maar speel daarna de devil's advocate:
- Welke aannames zijn mogelijk te optimistisch?
- Welke risico's zijn mogelijk onderschat?
- Wat kan er misgaan met deze strategie?`
        },
        {
            title: 'Questions Up Front + Stage Gating',
            when: 'Complex dossier opbouwen waarbij je nog niet alle info hebt',
            why: 'Questions up front verzamelt info, Stage gating zorgt voor gefaseerde verwerking',
            example: `Help me dit geschil analyseren. Stel me eerst 5 cruciale vragen die je nodig hebt om een goed advies te geven.

Verwerk mijn antwoorden gefaseerd:
1. Na mijn eerste antwoorden: stel vervolgvragen
2. Na alle info: maak een feitenmatrix
3. Na mijn akkoord: doe een juridische analyse
4. Na mijn feedback: geef een definitief advies

Ga pas naar de volgende fase als ik "Ga verder" zeg.`
        },
        {
            title: 'Chunking + Confirm-and-Continue + MECE',
            when: 'Lang contract of document volledig en gestructureerd analyseren',
            why: 'Chunking maakt het behapbaar, Confirm-and-continue geeft controle, MECE zorgt voor volledigheid',
            example: `Analyseer dit 80-pagina's tellende samenwerkingscontract systematisch:

- Verdeel het in logische secties (MECE-principe: geen overlap, wel volledig)
- Analyseer per sectie: kernpunten, risico's, aandachtspunten
- Wacht na elke sectie op mijn akkoord voordat je verder gaat
- Maak aan het eind een volledig overzicht van alle bevindingen

Begin met het voorstellen van een logische sectionering.`
        },
        {
            title: 'Output Constraints + Audience + Framework',
            when: 'Cliëntcommunicatie over complex juridisch advies',
            why: 'Zorgt voor toegankelijk maar compleet advies',
            example: `Schrijf een adviesbrief aan een cliënt over de juridische haalbaarheid van dit geschil.

Publiek: Ondernemer zonder juridische achtergrond, wel bedrijfsmatig slim
Toon: Professioneel maar toegankelijk, zonder juridisch jargon
Lengte: Max 2 A4'tjes (±1000 woorden)
Structuur: Gebruik WHY-HOW-WHAT framework (waarom relevant, hoe aanpakken, wat doen)
Format: 
- Korte samenvatting bovenaan (3 bullets)
- Duidelijke tussenkoppen
- Concrete vervolgstappen aan het eind`
        }
    ]

    return (
        <section id="combinatietechnieken" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Combinatietechnieken
            </h2>
            <p className="mb-6 text-muted-foreground">
                De kracht van prompting komt vaak uit het slim combineren van technieken. Hier zie je effectieve combinaties voor specifieke juridische toepassingen.
            </p>

            <div className="space-y-6">
                {combinations.map((combo, index) => (
                    <Card key={index} className="combination-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl">💪 Combinatie {index + 1}: {combo.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
                                    <p className="font-semibold text-sm mb-1">Wanneer:</p>
                                    <p className="text-sm">{combo.when}</p>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 rounded-lg p-3">
                                    <p className="font-semibold text-sm mb-1">Waarom:</p>
                                    <p className="text-sm">{combo.why}</p>
                                </div>
                            </div>

                            <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                <pre className="whitespace-pre-wrap font-mono text-sm">{combo.example}</pre>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                        <p className="font-semibold">
                            💡 Tip voor combinaties: Begin met 2-3 technieken en bouw op. Te veel technieken tegelijk kan de prompt onduidelijk maken.
                            Test wat werkt en verfijn iteratief.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}


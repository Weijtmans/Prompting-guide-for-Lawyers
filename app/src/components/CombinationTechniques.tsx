import { Paperclip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CombinationTechniques() {
    const combinations = [
        {
            id: 37,
            title: 'Few Shot + Chain of Thought',
            when: 'Complex juridisch document analyseren met consistente output',
            why: 'Few shot zorgt voor consistente format, Chain of thought voor diepgaande analyse',
            requiresAttachment: false,
            example: `Hierbij een voorbeeld van mijn aanpak om een contract te beoordelen:

Voorbeeld 1:
Clausule: "Partijen komen overeen dat..."
Analyse stap 1: Identificatie - dit is een wederzijdse afspraak
Analyse stap 2: Rechtsgrond - art. 6:217 BW (overeenkomst)
Analyse stap 3: Risico - geen, standaard formulering
Conclusie: Clausule is rechtsgeldig

Analyseer nu de volgende clausule op dezelfde manier, stap voor stap: [clausule]`
        },
        {
            id: 38,
            title: 'Persona + IRAC Framework',
            when: 'Juridisch advies vanuit specifiek perspectief',
            why: 'Persona geeft expertise-niveau, IRAC zorgt voor gestructureerde analyse',
            requiresAttachment: false,
            example: `Je bent een ervaren procesadvocaat gespecialiseerd in verbintenissenrecht. Analyseer deze zaak volgens het IRAC-framework:

Issue: [juridische vraag]
Rule: Welke artikelen en jurisprudentie zijn relevant?
Application: Hoe past dit op de feiten?
Conclusion: Wat is je procesadvies?`
        },
        {
            id: 39,
            title: 'Step Back + Devil\'s Advocate',
            when: 'Strategische beslissing nemen met risicobewustzijn',
            why: 'Step back geeft context, Devil\'s advocate identificeert zwakke plekken',
            requiresAttachment: false,
            example: `Voordat je dit juridisch advies geeft, neem eerst een stap terug:
- Wat zijn de bredere strategische implicaties?
- Wat zijn de onderliggende belangen van alle partijen?

Geef vervolgens je advies, maar speel daarna de devil's advocate:
- Welke aannames zijn mogelijk te optimistisch?
- Welke risico's zijn mogelijk onderschat?
- Wat kan er misgaan met deze strategie?`
        },
        {
            id: 40,
            title: 'Questions Up Front + Stage Gating',
            when: 'Complex dossier opbouwen waarbij je nog niet alle info hebt',
            why: 'Questions up front verzamelt info, Stage gating zorgt voor gefaseerde verwerking',
            requiresAttachment: false,
            example: `Help me dit geschil analyseren. Stel me eerst 5 cruciale vragen die je nodig hebt om een goed advies te geven.

Verwerk mijn antwoorden gefaseerd:
1. Na mijn eerste antwoorden: stel vervolgvragen
2. Na alle info: maak een feitenmatrix
3. Na mijn akkoord: doe een juridische analyse
4. Na mijn feedback: geef een definitief advies

Ga pas naar de volgende fase als ik "Ga verder" zeg.`
        },
        {
            id: 41,
            title: 'Chunking + Confirm-and-Continue + MECE',
            when: 'Lang contract of document volledig en gestructureerd analyseren',
            why: 'Chunking maakt het behapbaar, Confirm-and-continue geeft controle, MECE zorgt voor volledigheid',
            requiresAttachment: true,
            example: `Analyseer dit samenwerkingscontract systematisch:

- Verdeel het in logische secties (MECE-principe: geen overlap, wel volledig)
- Analyseer per sectie: kernpunten, risico's, aandachtspunten
- Wacht na elke sectie op mijn akkoord voordat je verder gaat
- Maak aan het eind een volledig overzicht van alle bevindingen

Begin met het voorstellen van een logische sectionering.`
        },
        {
            id: 42,
            title: 'Output Constraints + Audience + Framework',
            when: 'Cliëntcommunicatie over complex juridisch advies',
            why: 'Zorgt voor toegankelijk maar compleet advies',
            requiresAttachment: false,
            example: `Schrijf een advies aan een cliënt over de juridische haalbaarheid van dit geschil.

Publiek: Ondernemer zonder juridische achtergrond, wel commercieel ervaren
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
        <section id="combinatietechnieken" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Combinatietechnieken
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                De kracht van prompting komt vaak uit het effectief combineren van technieken. Hier zie je effectieve combinaties voor specifieke juridische toepassingen.
            </p>

            <div className="space-y-10">
                {combinations.map((combo) => (
                    <div key={combo.id} className="border-b last:border-b-0 pb-10 last:pb-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-lg font-medium">{combo.id}. {combo.title}</h3>
                            {combo.requiresAttachment && (
                                <Badge variant="secondary" className="gap-1.5 whitespace-nowrap">
                                    <Paperclip className="h-3 w-3" />
                                    Bijlage vereist
                                </Badge>
                            )}
                        </div>

                        <div className="space-y-2 mb-4 text-sm">
                            <div>
                                <span className="font-medium">Wanneer:</span>{' '}
                                <span className="text-muted-foreground">{combo.when}</span>
                            </div>
                            <div>
                                <span className="font-medium">Waarom:</span>{' '}
                                <span className="text-muted-foreground">{combo.why}</span>
                            </div>
                        </div>

                        {combo.requiresAttachment && (
                            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-3 flex gap-2 mb-4">
                                <Paperclip className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-900 dark:text-amber-100">
                                    <strong>Bijlage:</strong> Voeg het contract of document toe aan je prompt.
                                </p>
                            </div>
                        )}

                        <div className="bg-muted/50 rounded-lg p-4">
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                {combo.example}
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

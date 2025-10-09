import { Paperclip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ConversationalPrompting() {
    const techniques = [
        {
            id: 43,
            title: 'Task validation',
            description: 'Wanneer te gebruiken: om te controleren of de AI je opdracht goed begrijpt voordat deze aan de slag gaat.',
            requiresAttachment: false,
            example: `<prompt...>

Voordat je aan de slag gaat, vertel mij eerst wat mijn opdracht aan jou is en wat ik als resultaat verwacht.`,
            dos: ['Vraag om herhaling van opdracht', 'Laat verwachtingen bevestigen', 'Gebruik bij complexe opdrachten'],
            donts: ['Niet bij hele simpele vragen', 'Geen validatie zonder correctie', 'Niet overslaan bij onduidelijkheid']
        },
        {
            id: 44,
            title: 'Questions up front – bedrijfsovername',
            description: 'Wanneer te gebruiken: als je zelf nog niet alle relevante informatie hebt, maar de AI kan helpen de juiste vragen te stellen.',
            requiresAttachment: false,
            example: 'Help me deze bedrijfsovername goed doordenken door me vooraf de juiste vragen te stellen. Begin met wat jij denkt dat de kernvraag is in deze deal.'
        },
        {
            id: 45,
            title: 'Questions up front – weekendje weg',
            description: 'Wanneer te gebruiken: voor niet-juridische toepassingen waarbij je wilt dat de AI relevante context verzamelt.',
            requiresAttachment: false,
            example: 'Help me een verrassend weekendje weg voor met mijn partner te bedenken in een grote stad in het buitenland die we goed met de trein kunnen bereizen, vrijdag t/m zondag. Begin met 5 relevante vragen.'
        },
        {
            id: 46,
            title: 'Combinatie: validatie én vragen',
            description: 'Wanneer te gebruiken: voor complexe opdrachten waarbij je beide technieken combineert.',
            requiresAttachment: false,
            example: `Prompt 1: Voordat je aan de slag gaat, vertel me nu eerst wat mijn opdracht aan jou is en wat ik als resultaat verwacht.

Prompt 2: Vertel me welke informatie je van mij nodig hebt om de taak zo goed mogelijk uit te voeren.`
        },
        {
            id: 47,
            title: 'Step by step – huurgeschil',
            description: 'Wanneer te gebruiken: voor analyses die je in meerdere stappen wilt uitvoeren met tussentijdse controle.',
            requiresAttachment: false,
            example: `Prompt 1: Identificeer de kernvragen in dit huurgeschil.

Prompt 2: Welke artikelen uit boek 6 & 7 van het BW zijn hierop van toepassing?

Prompt 3: Pas deze artikelen toe op de feiten en geef een voorlopige conclusie.`
        },
        {
            id: 48,
            title: 'Confirm-and-continue',
            description: 'Wanneer te gebruiken: als je per onderdeel wilt kunnen bijsturen en goedkeuren.',
            requiresAttachment: true,
            example: `- Analyseer <bestemmingsplan.pdf> op afwijkingsmogelijkheden voor <bouwproject.pdf>.
- Stop na elke relevante passage en wacht op akkoord van mij op je analyse.
- Als alles geanalyseerd is, geef een overzichtelijke samenvatting.`,
            dos: ['Geef duidelijke stop-momenten', 'Wacht echt op bevestiging', 'Maak samenvattingen tussendoor'],
            donts: ['Niet te veel stop-momenten', 'Geen onduidelijke checkpoints', 'Niet doorgaan zonder akkoord']
        },
        {
            id: 49,
            title: 'Stage gating',
            description: 'Wanneer te gebruiken: voor projecten waarbij je gefaseerd informatie wilt aanleveren.',
            requiresAttachment: false,
            example: 'Help me onze zomervakantie plannen. Ik geef je stapsgewijs onze voorkeuren. Stel gerust verduidelijkende vragen tussendoor, maar wacht met een voorstel tot je alle input compleet hebt.'
        },
        {
            id: 50,
            title: 'Progressive prompting',
            description: 'Wanneer te gebruiken: om je prompt iteratief te verbeteren tot je het gewenste resultaat hebt.',
            requiresAttachment: false,
            example: `1. Analyseer de reactie van de AI op een prompt.
2. Gebruik delen daaruit om je prompt te verbeteren.
3. Voeg extra technieken en tactieken toe.
4. Totdat je de perfecte prompt hebt!`
        }
    ]

    return (
        <section id="conversational" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Conversational prompting
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                Technieken om de AI interactief te laten werken, door validatie, vragen en stapsgewijze aanpak.
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
                                    <strong>Bijlage:</strong> Voeg de PDF-documenten toe aan je prompt.
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

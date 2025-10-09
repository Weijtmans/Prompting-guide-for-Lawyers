import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ConversationalPrompting() {
    const techniques = [
        {
            id: 22,
            title: 'Task validation',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: om te controleren of de AI je opdracht goed begrijpt voordat deze aan de slag gaat.',
            example: `<prompt...>

Voordat je aan de slag gaat, vertel mij eerst wat mijn opdracht aan jou is en wat ik als resultaat verwacht.`,
            dos: ['Vraag om herhaling van opdracht', 'Laat verwachtingen bevestigen', 'Gebruik bij complexe opdrachten'],
            donts: ['Niet bij hele simpele vragen', 'Geen validatie zonder correctie', 'Niet overslaan bij onduidelijkheid']
        },
        {
            id: 23,
            title: 'Questions up front – bedrijfsovername',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: als je zelf nog niet alle relevante informatie hebt, maar de AI kan helpen de juiste vragen te stellen.',
            example: 'Help me deze bedrijfsovername goed doordenken door me vooraf de juiste vragen te stellen. Begin met wat jij denkt dat de kernvraag is in deze deal.'
        },
        {
            id: 24,
            title: 'Questions up front – weekendje weg',
            level: 'Beginner',
            description: 'Wanneer te gebruiken: voor niet-juridische toepassingen waarbij je wilt dat de AI relevante context verzamelt.',
            example: 'Help me een verrassend weekendje weg voor met mijn partner te bedenken in een grote stad in het buitenland die we goed met de trein kunnen bereizen, vrijdag t/m zondag. Begin met 5 relevante vragen.'
        },
        {
            id: 25,
            title: 'Combinatie: validatie én vragen',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor complexe opdrachten waarbij je beide technieken combineert.',
            example: `Prompt 1: Voordat je aan de slag gaat, vertel me nu eerst wat mijn opdracht aan jou is en wat ik als resultaat verwacht.

Prompt 2: Vertel me welke informatie je van mij nodig hebt om de taak zo goed mogelijk uit te voeren.`
        },
        {
            id: 26,
            title: 'Step by step – huurgeschil',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: voor analyses die je in meerdere stappen wilt uitvoeren met tussentijdse controle.',
            example: `Prompt 1: Identificeer de kernvragen in dit huurgeschil.

Prompt 2: Welke artikelen uit boek 6 & 7 van het BW zijn hierop van toepassing?

Prompt 3: Pas deze artikelen toe op de feiten en geef een voorlopige conclusie.`
        },
        {
            id: 27,
            title: 'Confirm-and-continue',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: als je per onderdeel wilt kunnen bijsturen en goedkeuren.',
            example: `- Analyseer <bestemmingsplan.pdf> op afwijkingsmogelijkheden voor <bouwproject.pdf>.
- Stop na elke relevante passage en wacht op akkoord van mij op je analyse.
- Als alles geanalyseerd is, geef een overzichtelijke samenvatting.`,
            dos: ['Geef duidelijke stop-momenten', 'Wacht echt op bevestiging', 'Maak samenvattingen tussendoor'],
            donts: ['Niet te veel stop-momenten', 'Geen onduidelijke checkpoints', 'Niet doorgaan zonder akkoord']
        },
        {
            id: 28,
            title: 'Stage gating',
            level: 'Gevorderd',
            description: 'Wanneer te gebruiken: voor projecten waarbij je gefaseerd informatie wilt aanleveren.',
            example: 'Help me onze zomervakantie plannen. Ik geef je stapsgewijs onze voorkeuren. Stel gerust verduidelijkende vragen tussendoor, maar wacht met een voorstel tot je alle input compleet hebt.'
        },
        {
            id: 29,
            title: 'Progressive prompting',
            level: 'Gemiddeld',
            description: 'Wanneer te gebruiken: om je prompt iteratief te verbeteren tot je het gewenste resultaat hebt.',
            example: `1. Analyseer de reactie van de AI op een prompt.
2. Gebruik delen daaruit om je prompt te verbeteren.
3. Voeg extra technieken en tactieken toe.
4. Totdat je de perfecte prompt hebt!`
        }
    ]

    return (
        <section id="conversational" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Conversational prompting
            </h2>
            <p className="mb-6 text-muted-foreground">
                Technieken om de AI interactief te laten werken, door validatie, vragen en stapsgewijze aanpak.
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


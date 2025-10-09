import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function QuickReference() {
    const techniques = [
        { name: 'Single shot', description: 'Directe vraag zonder voorbeelden', level: 'Beginner' },
        { name: 'Few shot', description: 'Met voorbeelden van gewenste output', level: 'Beginner' },
        { name: 'Chained prompts', description: 'Meerdere stappen achter elkaar', level: 'Gemiddeld' },
        { name: 'Chain of thought', description: 'Vraag om stapsgewijze redenering', level: 'Gemiddeld' },
        { name: 'Step back', description: 'Eerst bredere principes identificeren', level: 'Gemiddeld' },
        { name: 'Persona', description: 'Geef de AI een specifieke rol', level: 'Beginner' },
        { name: 'Brainstorm', description: 'Ideeën genereren zonder beslissing', level: 'Beginner' },
        { name: 'Audience & tone', description: 'Specificeer doelgroep en stijl', level: 'Beginner' },
        { name: 'Output constraints', description: 'Beperk lengte, vorm of structuur', level: 'Gemiddeld' },
        { name: 'Chunking', description: 'Deel lange documenten op', level: 'Gemiddeld' },
        { name: 'IRAC', description: 'Issue, Rule, Application, Conclusion', level: 'Gemiddeld' },
        { name: 'SCQA', description: 'Situation, Complication, Question, Answer', level: 'Gemiddeld' },
        { name: 'DGR, SATO, MECE', description: 'Juridische structuur frameworks', level: 'Gemiddeld' },
        { name: 'ELI5, 5W1H', description: 'Toegankelijke communicatie frameworks', level: 'Beginner' },
        { name: 'Combinatietechnieken', description: 'Meerdere technieken effectief combineren', level: 'Gevorderd' },
        { name: 'Task validation', description: 'Laat AI opdracht herhalen', level: 'Beginner' },
        { name: 'Questions up front', description: 'Laat AI relevante vragen stellen', level: 'Gemiddeld' },
        { name: 'Confirm-and-continue', description: 'Goedkeuring per stap', level: 'Gemiddeld' },
        { name: 'Stage gating', description: 'Gefaseerde informatievoorziening', level: 'Gevorderd' },
        { name: 'Progressive', description: 'Iteratief verbeteren van prompt', level: 'Gemiddeld' },
        { name: 'Rationale', description: 'Vraag om onderbouwing', level: 'Gemiddeld' },
        { name: 'Multiple perspectives', description: 'Verschillende invalshoeken', level: 'Gemiddeld' },
        { name: 'Bias-awareness', description: 'Identificeer aannames', level: 'Gevorderd' },
        { name: 'Devil\'s advocate', description: 'Zoek zwakke plekken', level: 'Gevorderd' },
    ]

    return (
        <section id="quick-reference" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Quick reference
            </h2>
            <p className="mb-6 text-muted-foreground">
                Overzicht van alle promptingtechnieken voor snel naslagwerk:
            </p>

            <Card>
                <CardHeader>
                    <CardTitle>Alle technieken in één overzicht</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-semibold">Techniek</TableHead>
                                    <TableHead className="font-semibold">Omschrijving</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {techniques.map((technique, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{technique.name}</TableCell>
                                        <TableCell className="text-muted-foreground">{technique.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}


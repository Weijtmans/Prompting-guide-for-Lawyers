import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Frameworks() {
    return (
        <section id="frameworks" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Juridische & taalframeworks
            </h2>
            <p className="mb-6 text-muted-foreground">
                Gevestigde frameworks uit de juridische en communicatieve wereld die je kunt gebruiken om structuur aan te brengen in je prompts.
            </p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Juridische frameworks</h3>
                    <div className="space-y-4">
                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>19. IRAC – Juridische analyse</CardTitle>
                                <CardDescription className="italic">
                                    Issue, Rule, Application, Conclusion
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>Standaard voor juridische analyses: identificeer het probleem, bepaal de regel, pas toe en trek conclusie.</p>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">{`Analyseer deze zaak volgens het IRAC-framework:
1. Issue: Wat is de juridische vraag?
2. Rule: Welke wettelijke regels zijn van toepassing?
3. Application: Hoe passen deze regels op deze specifieke feiten?
4. Conclusion: Wat is de juridische conclusie?`}</pre>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>DGR – Juridisch advies</CardTitle>
                                <CardDescription className="italic">
                                    Deugdelijk, Gemotiveerd, Rechtskundig advies
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Framework voor het geven van kwalitatief juridisch advies met goede onderbouwing.</p>
                            </CardContent>
                        </Card>

                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>SATO – Juridische stellingname</CardTitle>
                                <CardDescription className="italic">
                                    Standpunt, Argument, Tegenargument, Oordeel
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Voor het opbouwen van juridische argumentatie met aandacht voor tegenwerpingen.</p>
                            </CardContent>
                        </Card>

                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>MECE – Juridische structurering</CardTitle>
                                <CardDescription className="italic">
                                    Mutually Exclusive, Collectively Exhaustive
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Zorg dat je analyse volledig is en geen overlap heeft tussen categorieën.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Algemene taalframeworks</h3>
                    <div className="space-y-4">
                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>20. ELI5 – Toegankelijke uitleg</CardTitle>
                                <CardDescription className="italic">
                                    Explain Like I'm 5
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>Leg complexe materie uit op begrijpelijke wijze, zonder te simplificeren.</p>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">Leg het concept van aansprakelijkheid bij productdefecten uit alsof je het aan iemand uitlegt zonder juridische achtergrond. Gebruik heldere taal en concrete voorbeelden.</pre>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>5W1H – Feitelijke analyse</CardTitle>
                                <CardDescription className="italic">
                                    Who, What, When, Where, Why, How
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Zorg dat alle relevante vragen beantwoord worden in je analyse.</p>
                            </CardContent>
                        </Card>

                        <Card className="framework-card bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>WHY, HOW, WHAT – Overtuigende opbouw</CardTitle>
                                <CardDescription className="italic">
                                    Bekend van Simon Sinek
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Begin met het waarom, vervolg met hoe, eindig met wat. Effectief voor strategische communicatie.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-teal-200 dark:border-teal-900 bg-teal-50 dark:bg-teal-950/20 hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>21. SCQA – Probleemanalyse</CardTitle>
                                <CardDescription className="italic">
                                    Situation, Complication, Question, Answer
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>Framework voor het gestructureerd aanpakken van complexe juridische vraagstukken. Helpt om van een brede situatie naar een concrete oplossing te komen.</p>

                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">{`Analyseer deze juridische kwestie volgens het SCQA-framework:

Situation: Schets de huidige situatie en context. Wat is de achtergrond?

Complication: Wat is het probleem of de complicatie? Waarom is dit een uitdaging?

Question: Wat is de specifieke vraag die beantwoord moet worden?

Answer: Wat is jouw advies of oplossing, inclusief onderbouwing?`}</pre>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">✅ Do's</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Begin breed met situatieschets</li>
                                            <li>• Identificeer het echte probleem</li>
                                            <li>• Formuleer een scherpe vraag</li>
                                            <li>• Geef een onderbouwd antwoord</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">❌ Don'ts</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Niet meteen naar antwoord springen</li>
                                            <li>• Geen onduidelijke probleemstelling</li>
                                            <li>• Niet de vraag overslaan</li>
                                            <li>• Geen antwoord zonder onderbouwing</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}


import { CheckSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function OutputValidation() {
    return (
        <section id="output-validation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">
                Output validation checklist
            </h2>
            <p className="mb-6 text-muted-foreground">
                Gebruik deze checklist om AI-output te valideren voordat je het gebruikt in juridisch werk:
            </p>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckSquare className="h-5 w-5" />
                            Algemene validatie
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Volledigheid:</strong> zijn alle aspecten van de vraag behandeld?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Relevantie:</strong> sluit het antwoord aan bij de specifieke vraag?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Structuur:</strong> is de output logisch en overzichtelijk opgebouwd?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Toon:</strong> past de schrijfstijl bij het beoogde doel en publiek?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Lengte:</strong> is de output niet te uitvoerig of juist te summier?
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            ⚖️ Juridische validatie
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Wettelijke bronnen:</strong> zijn genoemde wetsartikelen correct en actueel?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Jurisprudentie:</strong> zijn rechtbankuitspraken correct geciteerd? (verifieer altijd)
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Rechtspraak:</strong> zijn de juridische conclusies logisch en onderbouwd?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Toepasbaarheid:</strong> is het recht correct toegepast op de specifieke feiten?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Actualiteit:</strong> houdt de analyse rekening met recente ontwikkelingen?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Jurisdictie:</strong> is het juiste rechtsstelsel toegepast (NL/EU/internationaal)?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Hallucinaties:</strong> geen verzonnen bronnen, artikelen of uitspraken?
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            🔒 Privacy & compliance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Vertrouwelijkheid:</strong> geen privacygevoelige informatie gedeeld met AI?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Cliëntgegevens:</strong> zijn persoonsgegevens geanonimiseerd?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Beroepsgeheim:</strong> is het beroepsgeheim gewaarborgd?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Toestemming:</strong> heeft de cliënt toestemming gegeven voor AI-gebruik?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>AVG-compliance:</strong> voldoet het gebruik aan AVG-vereisten?
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            🎯 Praktische validatie
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Uitvoerbaarheid:</strong> zijn de aanbevelingen realistisch en praktisch?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Kosteneffectiviteit:</strong> staat het advies in verhouding tot het belang?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Termijnen:</strong> zijn realistische deadlines gehanteerd?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Risico's:</strong> zijn mogelijke risico's benoemd?
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span>☐</span>
                                <div>
                                    <strong>Alternatieven:</strong> zijn verschillende opties overwogen?
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border-destructive bg-destructive/5">
                    <CardContent className="pt-6">
                        <p className="font-semibold">
                            ⚠️ Belangrijke regel: Accepteer nooit juridische output van AI zonder deze te verifiëren met betrouwbare bronnen.
                            AI kan overtuigend klinken maar feitelijk onjuist zijn. Jouw professionele verantwoordelijkheid blijft altijd leidend.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PromptTactics() {
    return (
        <section id="prompttactieken" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Prompttactieken
            </h2>
            <p className="mb-6 text-muted-foreground">
                Deze tactieken helpen je om de output van AI te sturen door specifieke instructies te geven over toon, publiek en structuur.
            </p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Audience specification & tone setting</h3>
                    <div className="space-y-4">
                        <Card className="technique-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>12. Informele uitnodiging per (Whats)app</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor informele communicatie waarbij je een specifieke toon wilt zetten.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <p className="font-mono text-sm">Toon: vriendelijk, informeel, met een knipoog.</p>
                                    <p className="font-mono text-sm">Taalgebruik: spreektaal, korte zinnen, emoji's beperkt toegestaan.</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="technique-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>13. Brief namens een VvE aan bewoners</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor formele maar toegankelijke communicatie.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <p className="font-mono text-sm">Toon: zakelijk en informatief, neutraal, beleefd, wel aanzetten tot besluit.</p>
                                    <p className="font-mono text-sm">Taalgebruik: helder, menselijk, zonder vakjargon.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Output constraints</h3>
                    <div className="space-y-4">
                        <Card className="technique-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>14. Professioneel – executive summary</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor heldere, bondige professionele documenten.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">Schrijf als executive summary in max. 500 woorden met bondige alinea's, geef heldere tussenkoppen en sluit af met advies.</pre>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="technique-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>15. Presentatie klaar – slide-vorm</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor presentaties waarbij je directe slidestructuur wilt.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">Schrijf in slide-vorm: max 30 woorden per slide, voornamelijk in bullets, iedere slide moet een titel en toelichtende subtitel bevatten.</pre>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="technique-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>16. Verhalend – met anekdotes</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor meer engaging en memorabele communicatie.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">Leg het uit aan een collega in de vorm van een prikkelend verhaal met anekdotes en een sterke punchline aan het eind.</pre>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>17. Constraint layering – risk & IT</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor complexe analyses waarbij je meerdere constraints wilt toepassen.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">{`Geef een praktisch advies over documentbeveiliging en toegangsbeheer in onze werkomgeving.

- Structuur: drie onderdelen: risico's, best practices, aanbevelingen.
- Format: tabel met kwetsbaarheid, impact, mitigerende maatregel.
- Framework: CIA-triad: vertrouwelijkheid, integriteit, beschikbaarheid.
- Lengte: max. 1000 woorden.
- Taal: technisch, helder, zonder juridisch of audit-jargon.
- Focus: rolgebaseerde toegang, versleuteling, datastructuur in gedeelde drives.
- Afsluiting: eindig met 3 direct uitvoerbare acties.`}</pre>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">✅ Do's</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Specificeer meerdere dimensies</li>
                                            <li>• Wees consistent in constraints</li>
                                            <li>• Geef duidelijke prioriteiten</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">❌ Don'ts</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Geen tegenstrijdige eisen</li>
                                            <li>• Niet te veel constraints (max 7-8)</li>
                                            <li>• Geen onrealistische combinaties</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>18. Chunking – analyse van zorgbeleidsdocument</CardTitle>
                                <CardDescription className="italic">
                                    Wanneer te gebruiken: voor zeer lange documenten die je systematisch wilt verwerken.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                    <pre className="whitespace-pre-wrap font-mono text-sm">{`- Dit beleidsdocument is erg lang, 125 pagina's.
- Analyseer het per hoofdstuk en vat de kernpunten samen.
- Benoem juridische implicaties, met focus op governance en naleving.
- Noem opvallende inzichten, cijfers of strategisch relevante trends.
- Verwerk mijn wedervragen waar nodig.
- Ga pas verder als ik 'Volgende' typ.
- Sluit af met risico's en strategische aandachtspunten voor de cliënt.`}</pre>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">✅ Do's</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Deel lange documenten op</li>
                                            <li>• Geef duidelijke stop-momenten</li>
                                            <li>• Vraag om samenvatting per deel</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">❌ Don'ts</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Geen te grote chunks (&gt;50 pagina's)</li>
                                            <li>• Niet te kleine chunks (&lt;5 pagina's)</li>
                                            <li>• Geen inconsistente opdeling</li>
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


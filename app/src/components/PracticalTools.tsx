import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Paperclip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function PracticalTools() {
    return (
        <section id="hulpmiddelen" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
                Praktische hulpmiddelen
            </h2>

            <div className="space-y-6">
                <Card className="technique-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <CardTitle className="text-xl">
                                    38. Voetnoten assistent
                                </CardTitle>
                                <CardDescription className="italic mt-2">
                                    Wanneer te gebruiken: voor het correct citeren volgens juridische standaarden.
                                </CardDescription>
                            </div>
                            <Badge variant="secondary" className="gap-1.5 whitespace-nowrap">
                                <Paperclip className="h-3 w-3" />
                                Bijlage vereist
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-3 flex gap-2">
                            <Paperclip className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-900 dark:text-amber-100">
                                <strong>Bijlage:</strong> Voeg de 'Leidraad voor juridische auteurs' toe aan je prompt.
                            </p>
                        </div>
                        <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                            <pre className="whitespace-pre-wrap font-mono text-sm">
                                Je bent een juridische assistent voor het maken van voetnoten. Je gebruikt de kennis in de bijgevoegde 'Leidraad voor juridische auteurs' om voetnoten voor mij te maken. Wanneer een gebruiker aan je vraagt om een voetnoot te maken, vraag je eerste uit welke bron de gebruiker wil citeren.
                            </pre>
                        </div>
                    </CardContent>
                </Card>

                <Card className="technique-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-xl">
                            39. Juridische onderzoeksassistent (letselschade door OD)
                        </CardTitle>
                        <CardDescription className="italic">
                            Wanneer te gebruiken: voor systematisch juridisch onderzoek met meerdere stappen.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="font-semibold mb-2">Stap 1 - Eerste analyse:</h4>
                            <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                <pre className="whitespace-pre-wrap font-mono text-sm">{`Je bent een jurist die onderzoek doet naar een rechtszaak. Je staat de eisende partij bij die letselschade heeft geleden door een onrechtmatige daad.

Output die ik verlang:
- Samenvatting van de feiten (beknopt).
- Samenvatting van het procesverloop.
- De rechtsregels (zo uitgebreid mogelijk uit het artikel).
- Welke wetten van toepassing zijn.
- In bullets weergeven.`}</pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Stap 2 - Analyseer en controleer:</h4>
                            <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                <pre className="whitespace-pre-wrap font-mono text-sm">
                                    Waar heb je de rechtsregels in het arrest gevonden? Welke feiten horen bij de rechtsregels? Geef per rechtsregel een concreet voorbeeld. Presenteer in een tabel met kolommen: Rechtsregel | Vindplaats | Feiten | Voorbeeld.
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Stap 3 - Opstellen dagvaarding:</h4>
                            <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                <pre className="whitespace-pre-wrap font-mono text-sm">{`Rol: Je staat de eisende partij bij. Je bent feiten gedreven en kunt krachtige argumenten formuleren.

Taak: de rechter overtuigen van een onrechtmatige daad.

Output: Volledige conceptversie dagvaarding, opgebouwd volgens IRAC, feiten gedreven, juridisch onderbouwd.`}</pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Stap 4 - Beide perspectieven:</h4>
                            <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                                <pre className="whitespace-pre-wrap font-mono text-sm">
                                    Bekijk de zaak kritisch vanuit beide partijen. Stel vragen die een advocaat van de gedaagde zou stellen. Benoem denkbare verweren. Leg uit hoe je elk verweer kunt weerleggen. Presenteer in tabellen.
                                </pre>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}


import { Paperclip } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function PracticalTools() {
    return (
        <section id="hulpmiddelen" className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
                Praktische hulpmiddelen
            </h2>
            <p className="mb-10 text-sm text-muted-foreground leading-6">
                Concrete voorbeelden van prompt-templates die je direct kunt gebruiken in je dagelijkse juridische praktijk.
            </p>

            <div className="space-y-10">
                <div className="border-b pb-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-medium mb-2">
                                59. Voetnoten assistent
                            </h3>
                            <p className="text-sm text-muted-foreground leading-6">
                                Wanneer te gebruiken: voor het correct citeren volgens juridische standaarden.
                            </p>
                        </div>
                        <Badge variant="secondary" className="gap-1.5 whitespace-nowrap">
                            <Paperclip className="h-3 w-3" />
                            Bijlage vereist
                        </Badge>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-3 flex gap-2 mb-4">
                        <Paperclip className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-900 dark:text-amber-100">
                            <strong>Bijlage:</strong> Voeg de 'Leidraad voor juridische auteurs' toe aan je prompt.
                        </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            Je bent een juridische assistent voor het maken van voetnoten. Je gebruikt de kennis in de bijgevoegde 'Leidraad voor juridische auteurs' om voetnoten voor mij te maken. Wanneer een gebruiker aan je vraagt om een voetnoot te maken, vraag je eerste uit welke bron de gebruiker wil citeren.
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-2">
                        60. Juridische onderzoeksassistent (letselschade door OD)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-6">
                        Wanneer te gebruiken: voor systematisch juridisch onderzoek met meerdere stappen.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-medium mb-3">Stap 1 - Eerste analyse:</h4>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{`Je bent een jurist die onderzoek doet naar een rechtszaak. Je staat de eisende partij bij die letselschade heeft geleden door een onrechtmatige daad.

Output die ik verlang:
- Samenvatting van de feiten (beknopt).
- Samenvatting van het procesverloop.
- De rechtsregels (zo uitgebreid mogelijk uit het artikel).
- Welke wetten van toepassing zijn.
- In bullets weergeven.`}</pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3">Stap 2 - Analyseer en controleer:</h4>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                    Waar heb je de rechtsregels in het arrest gevonden? Welke feiten horen bij de rechtsregels? Geef per rechtsregel een concreet voorbeeld. Presenteer in een tabel met kolommen: Rechtsregel | Vindplaats | Feiten | Voorbeeld.
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3">Stap 3 - Opstellen dagvaarding:</h4>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{`Rol: Je staat de eisende partij bij. Je bent feiten gedreven en kunt krachtige argumenten formuleren.

Taak: de rechter overtuigen van een onrechtmatige daad.

Output: Volledige conceptversie dagvaarding, opgebouwd volgens IRAC, feiten gedreven, juridisch onderbouwd.`}</pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3">Stap 4 - Beide perspectieven:</h4>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                    Bekijk de zaak kritisch vanuit beide partijen. Stel vragen die een advocaat van de gedaagde zou stellen. Benoem denkbare verweren. Leg uit hoe je elk verweer kunt weerleggen. Presenteer in tabellen.
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

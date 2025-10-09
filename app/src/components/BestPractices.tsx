import { CheckCircle2, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function BestPractices() {
  return (
    <section id="best-practices" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 pb-3 border-b">
        Best practices & praktische tips
      </h2>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Algemene principes voor effectief prompting:</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Wees specifiek en duidelijk</strong> – Vage opdrachten leveren vage resultaten. Benoem precies wat je verwacht.</div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Geef context</strong> – Leg uit waarom je iets vraagt en voor wie de output bedoeld is.</div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Begin breed, verfijn daarna</strong> – Start met een algemene vraag en zoom in op basis van het antwoord.</div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Test en itereer</strong> – Probeer verschillende formuleringen en leer wat het beste werkt.</div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Gebruik voorbeelden</strong> – Laat zien hoe je het wilt in plaats van alleen te vertellen.</div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Stel grenzen</strong> – Beperk lengte, structuur of focus als dat helpt.</div>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <div><strong>Valideer de output</strong> – Controleer altijd juridische analyses en bronnen.</div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-muted/50 border-l-4 border-l-green-600">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Pro tip:</strong>{' '}
              <span className="text-muted-foreground">
                Bewaar succesvolle prompts en bouw je eigen bibliotheek op. Wat vandaag werkt, kun je morgen hergebruiken en aanpassen.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-muted/50 border-l-4 border-l-green-600">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Juridische context:</strong>{' '}
              <span className="text-muted-foreground">
                AI-tools zijn geen vervanging voor juridische expertise. Gebruik ze als assistent bij research, structurering
                en eerste analyses, maar vertrouw niet blind op de output. Controleer altijd bronnen en conclusies.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 dark:bg-green-950/20 border-l-4 border-l-green-600">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Iteratief werken:</strong>{' '}
              <span className="text-muted-foreground">
                Zie prompting als een gesprek, niet als een eenmalige opdracht. Stel vervolgvragen, vraag om verduidelijking
                en verfijn stapsgewijs naar het gewenste resultaat.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

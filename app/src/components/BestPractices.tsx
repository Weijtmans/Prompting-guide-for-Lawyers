import { CheckCircle2, Lightbulb } from 'lucide-react'

export default function BestPractices() {
  return (
    <section id="best-practices" className="mb-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-8">
        Best practices & praktische tips
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Algemene principes voor effectief prompting</h3>
        <ul className="space-y-3 text-sm leading-6">
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Wees specifiek en duidelijk</span> – Vage opdrachten leveren vage resultaten. Benoem precies wat je verwacht.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Geef context</span> – Leg uit waarom je iets vraagt en voor wie de output bedoeld is.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Begin breed, verfijn daarna</span> – Start met een algemene vraag en zoom in op basis van het antwoord.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Test en itereer</span> – Probeer verschillende formuleringen en leer wat het beste werkt.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Gebruik voorbeelden</span> – Laat zien hoe je het wilt in plaats van alleen te vertellen.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Stel grenzen</span> – Beperk lengte, structuur of focus als dat helpt.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div><span className="font-medium">Valideer de output</span> – Controleer altijd juridische analyses en bronnen.</div>
          </li>
        </ul>
      </div>

      <div className="space-y-4 text-sm leading-6">
        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Pro tip:</span>{' '}
              <span className="text-muted-foreground">
                Bewaar succesvolle prompts en bouw je eigen bibliotheek op. Wat vandaag werkt, kun je morgen hergebruiken en aanpassen.
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Juridische context:</span>{' '}
              <span className="text-muted-foreground">
                AI-tools zijn geen vervanging voor juridische expertise. Gebruik ze als assistent bij research, structurering
                en eerste analyses, maar vertrouw niet blind op de output. Controleer altijd bronnen en conclusies.
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">Iteratief werken:</span>{' '}
              <span className="text-muted-foreground">
                Zie prompting als een gesprek, niet als een eenmalige opdracht. Stel vervolgvragen, vraag om verduidelijking
                en verfijn stapsgewijs naar het gewenste resultaat.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

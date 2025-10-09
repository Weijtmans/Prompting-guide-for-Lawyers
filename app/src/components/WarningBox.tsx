import { AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function WarningBox() {
  return (
    <Card className="mb-8 border-l-4 border-l-destructive bg-destructive/5">
      <CardContent className="pt-6 space-y-4">
        <div className="flex gap-3">
          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
          <p className="font-bold text-destructive text-lg">
            Belangrijke waarschuwing: juridisch onderzoek en hallucinaties
          </p>
        </div>
        <p className="leading-relaxed">
          AI-tools zoals ChatGPT, Claude en Gemini zijn <strong>niet gemaakt voor juridisch onderzoek. Zij hebben
            namelijk geen toegang tot rechtsbronnen (zoals actuele Nederlandse wet- en regelgeving of jurisprudentie)</strong>.
          Bij vragen over specifieke wetsartikelen, uitspraken of regelgeving bestaat een groot risico op{' '}
          <strong>hallucinaties</strong>, de AI verzint dan overtuigend klinkende maar feitelijk onjuiste informatie.
        </p>
        <p className="font-semibold">Voor betrouwbaar juridisch onderzoek heb je twee opties:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Voeg zelf de relevante <strong>wetteksten, jurisprudentie of andere juridische bronnen als bijlage</strong> toe
            aan je prompt, zodat de AI alleen kan putten uit betrouwbaar materiaal
          </li>
          <li>
            Gebruik een <strong>gespecialiseerde juridische AI-tool</strong> die toegang heeft tot actuele juridische
            databases (zoals Zeno of Andri)
          </li>
        </ul>
        <p className="font-bold">
          Vertrouw nooit blind op AI-output bij juridische vragen zonder deze te verifiëren met betrouwbare bronnen.
        </p>
      </CardContent>
    </Card>
  )
}

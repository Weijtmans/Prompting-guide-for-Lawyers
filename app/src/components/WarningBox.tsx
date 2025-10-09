import { AlertTriangle } from 'lucide-react'

export default function WarningBox() {
  return (
    <div className="mb-16 rounded-lg border border-destructive/50 bg-destructive/5 p-6">
      <div className="flex gap-3 mb-4">
        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <h2 className="text-lg font-semibold text-destructive">
          Belangrijke waarschuwing: juridisch onderzoek en hallucinaties
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-6">
        <p>
          AI-tools zoals ChatGPT, Claude en Gemini zijn <strong>niet gemaakt voor juridisch onderzoek. Zij hebben
            namelijk geen toegang tot rechtsbronnen (zoals actuele Nederlandse wet- en regelgeving of jurisprudentie)</strong>.
          Bij vragen over specifieke wetsartikelen, uitspraken of regelgeving bestaat een groot risico op{' '}
          <strong>hallucinaties</strong>, de AI verzint dan overtuigend klinkende maar feitelijk onjuiste informatie.
        </p>
        <p className="font-medium">Voor betrouwbaar juridisch onderzoek heb je twee opties:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Voeg zelf de relevante <strong>wetteksten, jurisprudentie of andere juridische bronnen als bijlage</strong> toe
            aan je prompt, zodat de AI alleen kan putten uit betrouwbaar materiaal
          </li>
          <li>
            Gebruik een <strong>gespecialiseerde juridische AI-tool</strong> die toegang heeft tot actuele juridische
            databases (zoals Zeno of Andri)
          </li>
        </ul>
        <p className="font-medium">
          Vertrouw nooit blind op AI-output bij juridische vragen zonder deze te verifiëren met betrouwbare bronnen.
        </p>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Introduction() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Introductie</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="leading-relaxed text-muted-foreground">
          Deze prompting gids biedt een overzicht van de belangrijkste promptingtechnieken specifiek voor juridisch werk.
          Prompting is de kunst van het formuleren van effectieve vragen en opdrachten aan AI-tools. Hoe beter je
          prompt, hoe relevanter en bruikbaarder de output.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          Effectief prompting verhoogt de kwaliteit van juridische analyses, bespaart tijd bij documentverwerking
          en helpt bij het structureren van complexe rechtsvragen. De technieken variëren van eenvoudige instructies
          tot geavanceerde (conversationele) methoden.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Hoe gebruik je deze prompting gids?</strong> Begin met de basistechnieken, experimenteer met verschillende
          tactieken en doe geleidelijk ervaring op. De voorbeelden zijn direct toepasbaar in je dagelijkse praktijk.
        </p>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TableOfContents() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Inhoudsopgave</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2 list-decimal list-inside">
          <li><a href="#best-practices" className="text-primary hover:underline transition-all font-medium">Best practices & praktische tips</a></li>
          <li><a href="#basistechnieken" className="text-primary hover:underline transition-all font-medium">Basistechnieken (1-11)</a></li>
          <li><a href="#prompttactieken" className="text-primary hover:underline transition-all font-medium">Prompttactieken (12-18)</a></li>
          <li><a href="#frameworks" className="text-primary hover:underline transition-all font-medium">Juridische & taalframeworks (19-21)</a></li>
          <li><a href="#combinatietechnieken" className="text-primary hover:underline transition-all font-medium">Combinatietechnieken</a></li>
          <li><a href="#conversational" className="text-primary hover:underline transition-all font-medium">Conversational prompting (22-29)</a></li>
          <li><a href="#reflective" className="text-primary hover:underline transition-all font-medium">Reflective prompting (30-37)</a></li>
          <li><a href="#hulpmiddelen" className="text-primary hover:underline transition-all font-medium">Praktische hulpmiddelen (38-39)</a></li>
          <li><a href="#quick-reference" className="text-primary hover:underline transition-all font-medium">Quick reference</a></li>
        </ol>
      </CardContent>
    </Card>
  )
}

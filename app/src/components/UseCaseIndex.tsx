import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UseCaseIndex() {
  const useCases = [
    {
      icon: '📄',
      title: 'Contractanalyse',
      items: [
        'Few shot prompting (#2)',
        'Chained prompts (#3)',
        'Chain of thought (#4)',
        'Chunking (#18)',
        'IRAC framework (#19)',
        'Confirm-and-continue (#26)',
      ],
    },
    {
      icon: '⚖️',
      title: 'Processtukken',
      items: [
        'Persona prompting (#6-8)',
        'Chain of thought (#4)',
        'IRAC framework (#19)',
        'SATO framework (#19)',
        "Devil's advocate (#37)",
        'Juridische onderzoeksassistent (#39)',
      ],
    },
    {
      icon: '💼',
      title: 'Cliëntcommunicatie',
      items: [
        'Audience specification (#12-13)',
        'Output constraints (#14-16)',
        'ELI5 framework (#19)',
        'WHY-HOW-WHAT framework (#19)',
        'Persona prompting (#7)',
      ],
    },
    {
      icon: '🔍',
      title: 'Juridische analyse',
      items: [
        'Step back prompting (#5)',
        'Chain of thought (#4)',
        'IRAC framework (#19)',
        'SCQA framework (#21)',
        'Multiple perspectives (#33-34)',
        'Compare answers (#35)',
      ],
    },
    {
      icon: '🎯',
      title: 'Risicoanalyse',
      items: [
        'Persona prompting (#8)',
        "Devil's advocate (#37)",
        'Bias-awareness (#36)',
        'Perspectiefwisseling (#33)',
        'Constraint layering (#17)',
      ],
    },
    {
      icon: '💡',
      title: 'Strategische verkenning',
      items: [
        'Brainstorm prompting (#9-11)',
        'Questions up front (#22-23)',
        'Step back prompting (#5)',
        'Compare answers (#35)',
        'Alternatieve interpretatie (#34)',
      ],
    },
    {
      icon: '📋',
      title: 'Documentverwerking',
      items: [
        'Chunking (#18)',
        'Chained prompts (#3)',
        'Stage gating (#28)',
        '5W1H framework (#19)',
        'MECE framework (#19)',
      ],
    },
    {
      icon: '✍️',
      title: 'Schrijfopdrachten',
      items: [
        'Few shot prompting (#2)',
        'Output constraints (#14-16)',
        'DGR framework (#19)',
        'Progressive prompting (#29)',
        'Voetnoten assistent (#38)',
      ],
    },
  ]

  return (
    <section id="use-case-index" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">
        Index op juridische use cases
      </h2>
      <p className="mb-6 text-muted-foreground">Vind snel de juiste techniek voor jouw situatie:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {useCases.map((useCase, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">{useCase.icon}</span>
                {useCase.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {useCase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

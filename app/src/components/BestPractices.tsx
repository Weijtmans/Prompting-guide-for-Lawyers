import { CheckCircle2, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function BestPractices() {
  const { t } = useLanguage()

  return (
    <section id="best-practices" className="mb-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-8">
        {t('bestPractices.title')}
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">{t('bestPractices.generalTitle')}</h3>
        <ul className="space-y-3 text-sm leading-6">
          {t('bestPractices.items').map((item: any, index: number) => (
            <li key={index} className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div><span className="font-medium">{item.title}</span> – {item.desc}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 text-sm leading-6">
        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">{t('bestPractices.proTip.title')}</span>{' '}
              <span className="text-muted-foreground">
                {t('bestPractices.proTip.desc')}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">{t('bestPractices.legalContext.title')}</span>{' '}
              <span className="text-muted-foreground">
                {t('bestPractices.legalContext.desc')}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium">{t('bestPractices.iterativeWork.title')}</span>{' '}
              <span className="text-muted-foreground">
                {t('bestPractices.iterativeWork.desc')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

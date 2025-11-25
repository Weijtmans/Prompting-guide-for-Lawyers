import { useLanguage } from '@/context/LanguageContext'

export default function Introduction() {
  const { t } = useLanguage()

  return (
    <div className="mb-16">
      <h1 className="text-4xl font-bold tracking-tight mb-6">{t('intro.title')}</h1>
      <div className="space-y-4 text-base leading-7">
        <p className="text-muted-foreground">
          {t('intro.p1')}
        </p>
        <p className="text-muted-foreground">
          {t('intro.p2')}
        </p>
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">{t('intro.howTo')}</span> {t('intro.p3')}
        </p>
      </div>
    </div>
  )
}

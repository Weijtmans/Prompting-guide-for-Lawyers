import { AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function WarningBox() {
  const { t } = useLanguage()

  return (
    <div className="mb-16 rounded-lg border border-destructive/50 bg-destructive/5 p-6">
      <div className="flex gap-3 mb-4">
        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <h2 className="text-lg font-semibold text-destructive">
          {t('warning.title')}
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-6">
        <p>
          {t('warning.p1')}
        </p>
        <p className="font-medium">{t('warning.optionsTitle')}</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            {t('warning.option1')}
          </li>
          <li>
            {t('warning.option2')} ({t('common.suchAs')} <a href="https://zeno.law" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive">Zeno</a> {t('common.or')} <a href="https://andri.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive">Andri</a>)
          </li>
        </ul>
        <p className="font-medium">
          {t('warning.conclusion')}
        </p>
      </div>
    </div>
  )
}

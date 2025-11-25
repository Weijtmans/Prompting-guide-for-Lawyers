import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-2">
            <Button
                variant={language === 'nl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('nl')}
                className="w-12"
            >
                NL
            </Button>
            <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="w-12"
            >
                EN
            </Button>
        </div>
    )
}

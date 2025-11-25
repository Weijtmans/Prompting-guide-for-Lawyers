import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type TranslationKey, type Language } from '@/lib/translations'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: TranslationKey) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        const browserLang = navigator.language.toLowerCase()
        return browserLang.startsWith('nl') ? 'nl' : 'en'
    })

    const t = (key: TranslationKey) => {
        const keys = key.split('.')
        let value: any = translations[language]

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k]
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${language} `)
                return key
            }
        }

        return value
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

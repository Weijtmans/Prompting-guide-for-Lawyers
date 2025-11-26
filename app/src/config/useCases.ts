import {
    Brain,
    Search,
    Scale,
    AlertTriangle,
    FileText,
    CheckSquare,
    Layers,
    Scissors,
    MessageSquare,
    Gavel,
    Shield,
    User,
    List,
    RefreshCw,
    Users,
    Layout,
    ShieldCheck,
    Lightbulb,
    HelpCircle,
    Sparkles
} from 'lucide-react'
import type { UseCaseSectionProps } from '@/components/UseCaseSection'

// We omit 'title' and 'description' here because they come from translations
// We only need the structural config
export const useCasesConfig: Omit<UseCaseSectionProps, 'title' | 'description'>[] = [
    {
        id: 'contract-drafting',
        icon: FileText,
        iconColorClass: 'text-indigo-600 dark:text-indigo-400',
        iconBgClass: 'bg-indigo-100 dark:bg-indigo-900/30',
        items: [
            { key: 'chunking', icon: Layers, translationKey: 'chunking' },
            { key: 'confirm', icon: CheckSquare, translationKey: 'confirm' },
            { key: 'mece', icon: List, translationKey: 'mece' },
            { key: 'constraints', icon: Scissors, translationKey: 'constraints' },
            { key: 'footnotes', icon: MessageSquare, translationKey: 'footnotes' },
        ]
    },
    {
        id: 'legal-research',
        icon: Brain,
        iconColorClass: 'text-blue-600 dark:text-blue-400',
        iconBgClass: 'bg-blue-100 dark:bg-blue-900/30',
        items: [
            { key: 'irac', icon: Scale, translationKey: 'irac' },
            { key: 'stepBack', icon: Search, translationKey: 'stepBack' },
            { key: 'fiveW', icon: HelpCircle, translationKey: 'fiveW' },
            { key: 'bias', icon: AlertTriangle, translationKey: 'bias' },
        ]
    },
    {
        id: 'litigation',
        icon: Gavel,
        iconColorClass: 'text-red-600 dark:text-red-400',
        iconBgClass: 'bg-red-100 dark:bg-red-900/30',
        items: [
            { key: 'sato', icon: Shield, translationKey: 'sato' },
            { key: 'devil', icon: AlertTriangle, translationKey: 'devil' },
            { key: 'persona', icon: User, translationKey: 'persona' },
            { key: 'stepByStep', icon: List, translationKey: 'stepByStep' },
        ]
    },
    {
        id: 'client-communication',
        icon: MessageSquare,
        iconColorClass: 'text-purple-600 dark:text-purple-400',
        iconBgClass: 'bg-purple-100 dark:bg-purple-900/30',
        items: [
            { key: 'audience', icon: Users, translationKey: 'audience' },
            { key: 'eli5', icon: RefreshCw, translationKey: 'eli5' },
            { key: 'pyramid', icon: Layout, translationKey: 'pyramid' },
            { key: 'dgr', icon: ShieldCheck, translationKey: 'dgr' },
        ]
    },
    {
        id: 'strategy',
        icon: Brain,
        iconColorClass: 'text-orange-600 dark:text-orange-400',
        iconBgClass: 'bg-orange-100 dark:bg-orange-900/30',
        items: [
            { key: 'brainstorm', icon: Lightbulb, translationKey: 'brainstorm' },
            { key: 'questions', icon: HelpCircle, translationKey: 'questions' },
            { key: 'perspective', icon: RefreshCw, translationKey: 'perspective' },
            { key: 'meta', icon: Sparkles, translationKey: 'meta' },
        ]
    }
]

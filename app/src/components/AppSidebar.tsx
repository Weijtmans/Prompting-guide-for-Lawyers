import { Home, Lightbulb, Layers, MessageSquare, Brain, Printer } from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from '@/components/ui/sidebar'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'

export function AppSidebar() {
    const { t, language, setLanguage } = useLanguage()

    const overzicht = [
        {
            title: t('sidebar.intro'),
            icon: Home,
            href: '#intro',
        },
        {
            title: t('sidebar.bestPractices'),
            icon: Brain,
            href: '#best-practices',
        },
    ]

    const technieken = [
        {
            title: t('sidebar.fundamentals'),
            icon: Lightbulb,
            href: '#fundamentals',
        },
        {
            title: t('sidebar.contractDrafting'),
            icon: Layers,
            href: '#contract-drafting',
        },
        {
            title: t('sidebar.legalResearch'),
            icon: Brain,
            href: '#legal-research',
        },
        {
            title: t('sidebar.litigation'),
            icon: Layers,
            href: '#litigation',
        },
        {
            title: t('sidebar.clientCommunication'),
            icon: MessageSquare,
            href: '#client-communication',
        },
        {
            title: t('sidebar.strategy'),
            icon: Brain,
            href: '#strategy',
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader className="p-4 border-b">
                <div className="flex items-center gap-2 font-semibold text-lg">
                    <div className="h-8 w-8 flex items-center justify-center">
                        <img src="/logo.webp" alt="Logo" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span>{t('common.title')}</span>
                        <span className="text-xs text-muted-foreground font-normal mt-1">{t('common.subtitle')}</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{t('sidebar.overview')}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {overzicht.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.href}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>{t('sidebar.techniques')}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {technieken.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.href}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="mt-auto p-4 border-t space-y-4">
                    <div className="flex gap-2 justify-center">
                        <Button
                            variant={language === 'nl' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setLanguage('nl')}
                            className="w-12 h-8 p-0"
                            title="Nederlands"
                        >
                            <span className="text-lg">🇳🇱</span>
                        </Button>
                        <Button
                            variant={language === 'en' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setLanguage('en')}
                            className="w-12 h-8 p-0"
                            title="English"
                        >
                            <span className="text-lg">🇬🇧</span>
                        </Button>
                    </div>

                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full px-2 py-1.5 rounded-md hover:bg-accent transition-colors justify-center"
                    >
                        <Printer className="h-4 w-4" />
                        {t('common.print')}
                    </button>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}

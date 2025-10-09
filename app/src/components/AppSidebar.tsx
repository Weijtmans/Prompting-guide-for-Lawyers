import { Home, BookOpen, Lightbulb, Layers, MessageSquare, Brain, Wrench, Printer } from 'lucide-react'
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
    SidebarFooter,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

const menuItems = [
    {
        title: 'Introductie',
        icon: Home,
        href: '#intro',
    },
    {
        title: 'Best Practices',
        icon: Lightbulb,
        href: '#best-practices',
    },
]

const technieken = [
    {
        title: 'Basistechnieken',
        icon: BookOpen,
        href: '#basistechnieken',
    },
    {
        title: 'Prompttactieken',
        icon: Layers,
        href: '#prompttactieken',
    },
    {
        title: 'Frameworks',
        icon: Brain,
        href: '#frameworks',
    },
    {
        title: 'Combinaties',
        icon: Layers,
        href: '#combinatietechnieken',
    },
    {
        title: 'Conversational',
        icon: MessageSquare,
        href: '#conversational',
    },
    {
        title: 'Reflective',
        icon: Brain,
        href: '#reflective',
    },
    {
        title: 'Hulpmiddelen',
        icon: Wrench,
        href: '#hulpmiddelen',
    },
]

export function AppSidebar() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <Sidebar className="print:hidden">
            <SidebarHeader className="border-b px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                        <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Prompting gids</h2>
                        <p className="text-xs text-muted-foreground">Voor advocaten</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Overzicht</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.href}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Technieken</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {technieken.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.href}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t p-4 space-y-3">
                <Button
                    onClick={handlePrint}
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                >
                    <Printer className="h-4 w-4" />
                    Print
                </Button>
                <div className="text-xs text-muted-foreground text-center">
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}


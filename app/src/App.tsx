import './App.css'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import Introduction from './components/Introduction'
import WarningBox from './components/WarningBox'
import BestPractices from './components/BestPractices'
import Fundamentals from './components/Fundamentals'
import LegalResearch from './components/use-cases/LegalResearch'
import ContractDrafting from './components/use-cases/ContractDrafting'
import Litigation from './components/use-cases/Litigation'
import ClientCommunication from './components/use-cases/ClientCommunication'
import Strategy from './components/use-cases/Strategy'
import { LanguageProvider } from './context/LanguageContext'

function AppContent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col">

          <div className="flex flex-1 flex-col">
            <main className="flex-1">
              <div className="container max-w-4xl mx-auto py-8 px-6">
                <div className="hidden print:block mb-8">
                  <img src="/logo.webp" alt="HVG Law" className="h-12" />
                </div>
                <div id="intro">
                  <Introduction />
                </div>
                <WarningBox />
                <BestPractices />
                <Fundamentals />

                <div className="my-12 border-t pt-12">
                  <h2 className="text-3xl font-bold mb-8 print:hidden">Juridische Use Cases</h2>
                  <ContractDrafting />
                  <LegalResearch />
                  <Litigation />
                  <ClientCommunication />
                  <Strategy />
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}


export default App

import './App.css'
import { useState, useEffect } from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import Introduction from './components/Introduction'
import WarningBox from './components/WarningBox'
import BestPractices from './components/BestPractices'
import BaseTechniques from './components/BaseTechniques'
import PromptTactics from './components/PromptTactics'
import Frameworks from './components/Frameworks'
import CombinationTechniques from './components/CombinationTechniques'
import ConversationalPrompting from './components/ConversationalPrompting'
import ReflectivePrompting from './components/ReflectivePrompting'
import PracticalTools from './components/PracticalTools'
import PasswordScreen from './components/PasswordScreen'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authenticated = sessionStorage.getItem('authenticated') === 'true'
    setIsAuthenticated(authenticated)
  }, [])

  if (!isAuthenticated) {
    return <PasswordScreen onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col">
            <main className="flex-1">
              <div className="container max-w-4xl mx-auto py-8 px-6">
                <div id="intro">
                  <Introduction />
                </div>
                <WarningBox />
                <BestPractices />
                <BaseTechniques />
                <PromptTactics />
                <Frameworks />
                <CombinationTechniques />
                <ConversationalPrompting />
                <ReflectivePrompting />
                <PracticalTools />
              </div>
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App

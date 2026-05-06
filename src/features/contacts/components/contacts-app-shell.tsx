import { useState } from 'react'
import { BottomNav } from './bottom-nav'
import { TopBar } from './top-bar'
import { RemindersPage } from '../pages/reminders-page'
import { ContactsPage } from '../pages/contacts-page'
import { HistoryPage } from '../pages/history-page'
import type { TopLevelScreen } from '../types'

export function ContactsAppShell() {
  const [activeScreen, setActiveScreen] = useState<TopLevelScreen>('reminders')

  let page = <RemindersPage />

  if (activeScreen === 'contacts') {
    page = <ContactsPage />
  }

  if (activeScreen === 'history') {
    page = <HistoryPage />
  }

  return (
    <div className="app-shell contacts-app">
      <div className="contacts-app__frame">
        <TopBar />
        <main className="contacts-app__main">{page}</main>
        <BottomNav activeScreen={activeScreen} onSelect={setActiveScreen} />
      </div>
    </div>
  )
}

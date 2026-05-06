import { useState } from 'react'
import { BottomNav } from './bottom-nav'
import { TopBar } from './top-bar'
import { RemindersPage } from '../pages/reminders-page'
import { ContactsPage } from '../pages/contacts-page'
import { HistoryPage } from '../pages/history-page'
import { AddContactPage } from '../pages/add-contact-page'
import type { AppView, TopLevelScreen } from '../types'

export function ContactsAppShell() {
  const [activeView, setActiveView] = useState<AppView>('reminders')
  const activeScreen: TopLevelScreen =
    activeView === 'add-contact' || activeView === 'add-event'
      ? 'contacts'
      : activeView

  let page = <RemindersPage />

  if (activeView === 'contacts') {
    page = <ContactsPage onAddContact={() => setActiveView('add-contact')} />
  }

  if (activeView === 'history') {
    page = <HistoryPage />
  }

  if (activeView === 'add-contact') {
    page = <AddContactPage onCancel={() => setActiveView('contacts')} />
  }

  const showBottomNav =
    activeView === 'reminders' ||
    activeView === 'contacts' ||
    activeView === 'history'

  return (
    <div className="app-shell contacts-app">
      <div className="contacts-app__frame">
        <TopBar subdued={!showBottomNav} />
        <main className="contacts-app__main">{page}</main>
        {showBottomNav ? (
          <BottomNav activeScreen={activeScreen} onSelect={setActiveView} />
        ) : null}
      </div>
    </div>
  )
}

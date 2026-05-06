import { useState } from 'react'
import { TopBar } from './top-bar'
import { RemindersPage } from '../pages/reminders-page'
import { ContactsPage } from '../pages/contacts-page'
import { HistoryPage } from '../pages/history-page'
import { AddContactPage } from '../pages/add-contact-page'
import { AddEventPage } from '../pages/add-event-page'
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
    page = <HistoryPage onAddEvent={() => setActiveView('add-event')} />
  }

  if (activeView === 'add-contact') {
    page = <AddContactPage onCancel={() => setActiveView('contacts')} />
  }

  if (activeView === 'add-event') {
    page = <AddEventPage onCancel={() => setActiveView('history')} />
  }

  const showBottomNav =
    activeView === 'reminders' ||
    activeView === 'contacts' ||
    activeView === 'history'

  return (
    <div className="app-shell contacts-app">
      <div className="contacts-app__frame">
        <TopBar
          subdued={!showBottomNav}
          activeScreen={showBottomNav ? activeScreen : undefined}
          onNavigate={showBottomNav ? setActiveView : undefined}
        />
        <main className="contacts-app__main">{page}</main>
      </div>
    </div>
  )
}

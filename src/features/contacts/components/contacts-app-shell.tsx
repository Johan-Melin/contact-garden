import { BottomNav } from './bottom-nav'
import { TopBar } from './top-bar'
import { RemindersPage } from '../pages/reminders-page'

export function ContactsAppShell() {
  return (
    <div className="app-shell contacts-app">
      <div className="contacts-app__frame">
        <TopBar />
        <main className="contacts-app__main">
          <RemindersPage />
        </main>
        <BottomNav activeScreen="reminders" />
      </div>
    </div>
  )
}

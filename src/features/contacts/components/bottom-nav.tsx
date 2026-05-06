import type { ReactNode } from 'react'
import { BellIcon, ClockIcon, PeopleIcon } from './icons'
import type { TopLevelScreen } from '../types'

type NavItem = {
  id: TopLevelScreen
  label: string
  icon: ReactNode
}

const items: NavItem[] = [
  { id: 'reminders', label: 'Reminders', icon: <BellIcon className="bottom-nav__icon" /> },
  { id: 'contacts', label: 'Contacts', icon: <PeopleIcon className="bottom-nav__icon" /> },
  { id: 'history', label: 'History', icon: <ClockIcon className="bottom-nav__icon" /> },
]

type BottomNavProps = {
  activeScreen: TopLevelScreen
}

export function BottomNav({ activeScreen }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => {
        const isActive = item.id === activeScreen
        return (
          <button
            key={item.id}
            type="button"
            className={isActive ? 'bottom-nav__item bottom-nav__item--active' : 'bottom-nav__item'}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

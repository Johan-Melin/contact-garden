import { BellIcon, ClockIcon, FlowerIcon, PeopleIcon } from './icons'
import type { TopLevelScreen } from '../types'

type TopBarProps = {
  subdued?: boolean
  activeScreen?: TopLevelScreen
  onNavigate?: (screen: TopLevelScreen) => void
}

const navItems: TopLevelScreen[] = ['reminders', 'contacts', 'history']

const navIcons = {
  reminders: BellIcon,
  contacts: PeopleIcon,
  history: ClockIcon,
} as const

export function TopBar({
  subdued = false,
  activeScreen,
  onNavigate,
}: TopBarProps) {
  return (
    <header className={subdued ? 'top-bar top-bar--subdued' : 'top-bar'}>
      <div className="top-bar__identity">
        <div className="top-bar__avatar" aria-hidden="true">
          <FlowerIcon className="top-bar__avatar-icon" />
        </div>
        <div>
          <p className="top-bar__eyebrow">Relationship Garden</p>
          <h1 className="top-bar__title">Garden</h1>
        </div>
      </div>

      {activeScreen && onNavigate ? (
        <nav className="top-bar__nav" aria-label="Primary">
          {navItems.map((screen) => {
            const isActive = screen === activeScreen
            const label = screen.charAt(0).toUpperCase() + screen.slice(1)
            const Icon = navIcons[screen]

            return (
              <button
                key={screen}
                type="button"
                className={isActive ? 'top-bar__nav-item top-bar__nav-item--active' : 'top-bar__nav-item'}
                aria-current={isActive ? 'page' : undefined}
                aria-label={label}
                onClick={() => onNavigate(screen)}
              >
                <Icon className="top-bar__nav-icon" />
                <span className="top-bar__nav-label">{label}</span>
              </button>
            )
          })}
        </nav>
      ) : (
        <button type="button" className="icon-button">
          Calm mode
        </button>
      )}
    </header>
  )
}

import { FlowerIcon } from './icons'

type TopBarProps = {
  subdued?: boolean
}

export function TopBar({ subdued = false }: TopBarProps) {
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
      <button type="button" className="icon-button">
        Calm mode
      </button>
    </header>
  )
}

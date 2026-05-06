import type { CSSProperties } from 'react'
import { InPersonIcon, MessageIcon, PhoneIcon, VideoIcon } from './icons'
import type { HistoryEntry } from '../types'

type HistoryEntryCardProps = {
  entry: HistoryEntry
}

const eventMeta = {
  phone: {
    label: 'Phone call',
    icon: PhoneIcon,
    className: 'history-entry-card__event history-entry-card__event--phone',
  },
  message: {
    label: 'Message',
    icon: MessageIcon,
    className: 'history-entry-card__event history-entry-card__event--message',
  },
  'in-person': {
    label: 'In person',
    icon: InPersonIcon,
    className: 'history-entry-card__event history-entry-card__event--in-person',
  },
  video: {
    label: 'Video call',
    icon: VideoIcon,
    className: 'history-entry-card__event history-entry-card__event--video',
  },
} as const

export function HistoryEntryCard({ entry }: HistoryEntryCardProps) {
  const meta = eventMeta[entry.eventType]
  const Icon = meta.icon

  return (
    <article className="history-entry-card">
      <div
        className="history-entry-card__avatar-wrap"
        style={{ '--history-ring-color': entry.ringColor } as CSSProperties}
      >
        <img className="history-entry-card__avatar" src={entry.imageUrl} alt="" />
      </div>

      <div className="history-entry-card__body">
        <div className="history-entry-card__header">
          <h3>{entry.name}</h3>
          <span>{entry.timeLabel}</span>
        </div>
        <p className={meta.className}>
          <Icon className="history-entry-card__event-icon" />
          <span>{meta.label}</span>
        </p>
      </div>
    </article>
  )
}

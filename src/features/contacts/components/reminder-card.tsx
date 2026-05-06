import type { CSSProperties } from 'react'
import { MessageIcon, PhoneIcon } from './icons'
import type { Reminder } from '../types'

type ReminderCardProps = {
  reminder: Reminder
}

export function ReminderCard({ reminder }: ReminderCardProps) {
  const actionIcon =
    reminder.action === 'call' ? (
      <PhoneIcon className="reminder-card__action-icon" />
    ) : (
      <MessageIcon className="reminder-card__action-icon" />
    )

  return (
    <article className="reminder-card">
      <div
        className="reminder-card__ring"
        style={{ '--ring-accent': reminder.accentColor } as CSSProperties}
      >
        <img className="reminder-card__image" src={reminder.imageUrl} alt="" />
      </div>
      <div className="reminder-card__body">
        <div className="reminder-card__header">
          <h3>{reminder.name}</h3>
          <span className="chip">{reminder.category}</span>
        </div>
        <p className={reminder.status === 'overdue' ? 'reminder-card__note reminder-card__note--urgent' : 'reminder-card__note'}>
          {reminder.note}
        </p>
      </div>
      <button type="button" className="reminder-card__action" aria-label={`Reach out to ${reminder.name}`}>
        {actionIcon}
      </button>
    </article>
  )
}

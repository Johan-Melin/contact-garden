import type { CSSProperties } from 'react'
import { MessageIcon, PhoneIcon } from './icons'
import type { Contact } from '../types'

type ContactCardProps = {
  contact: Contact
}

export function ContactCard({ contact }: ContactCardProps) {
  const accentClassName =
    contact.category === 'Family'
      ? 'chip chip--family'
      : contact.category === 'Colleague'
        ? 'chip chip--colleague'
        : 'chip'

  return (
    <article className="contact-card">
      <div
        className="contact-card__ring"
        style={{ '--growth-progress': `${contact.growthPercent}%` } as CSSProperties}
      >
        <img className="contact-card__image" src={contact.imageUrl} alt="" />
      </div>

      <div className="contact-card__body">
        <div className="contact-card__header">
          <h3>{contact.name}</h3>
          <span className={accentClassName}>{contact.category}</span>
        </div>
        <p className="contact-card__meta">{contact.cadenceLabel}</p>
        <p
          className={
            contact.statusLabel === 'Overdue'
              ? 'contact-card__status contact-card__status--overdue'
              : 'contact-card__status'
          }
        >
          {contact.statusLabel}
        </p>
      </div>

      <button type="button" className="contact-card__action" aria-label={`Reach out to ${contact.name}`}>
        {contact.action === 'call' ? (
          <PhoneIcon className="reminder-card__action-icon" />
        ) : (
          <MessageIcon className="reminder-card__action-icon" />
        )}
      </button>
    </article>
  )
}

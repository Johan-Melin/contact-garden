type AddEventPageProps = {
  onCancel: () => void
}

const quickContacts = ['Sarah L.', 'David K.', 'Elena M.', 'Marcus R.'] as const
const eventTypes = ['Phone Call', 'Message', 'In-person', 'Video Call'] as const

export function AddEventPage({ onCancel }: AddEventPageProps) {
  return (
    <div className="form-page">
      <section className="form-page__hero">
        <h2>Record a Connection</h2>
        <p>
          Capture the moment while it is fresh so reminders stay accurate and
          follow-ups feel thoughtful.
        </p>
      </section>

      <form className="entry-form" onSubmit={(event) => event.preventDefault()}>
        <div className="entry-form__section">
          <label className="entry-form__label" htmlFor="event-contact">
            Who did you connect with?
          </label>
          <input
            id="event-contact"
            className="entry-form__input"
            type="search"
            placeholder="Search contacts..."
          />
          <div className="quick-contact-row">
            {quickContacts.map((contact, index) => (
              <button
                key={contact}
                type="button"
                className={
                  index === 0
                    ? 'quick-contact-row__item quick-contact-row__item--active'
                    : 'quick-contact-row__item'
                }
              >
                <span className="quick-contact-row__avatar" aria-hidden="true">
                  {contact.charAt(0)}
                </span>
                <span>{contact}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="entry-form__section">
          <label className="entry-form__label" htmlFor="event-date">
            When did it happen?
          </label>
          <input
            id="event-date"
            className="entry-form__input"
            type="date"
            defaultValue="2026-05-06"
          />
        </div>

        <div className="entry-form__section">
          <span className="entry-form__label">Connection Type</span>
          <div className="interval-grid">
            {eventTypes.map((type, index) => (
              <button
                key={type}
                type="button"
                className={
                  index === 0
                    ? 'interval-grid__item interval-grid__item--active'
                    : 'interval-grid__item'
                }
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="entry-form__section">
          <label className="entry-form__label" htmlFor="event-notes">
            Memories &amp; Notes
          </label>
          <textarea
            id="event-notes"
            className="entry-form__textarea"
            rows={4}
            placeholder="What did you talk about? Any highlights or future follow-ups?"
          />
        </div>

        <div className="form-page__actions">
          <button type="submit" className="form-page__submit">
            Log Event
          </button>
          <button type="button" className="form-page__cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

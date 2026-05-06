import type { ContactInterval } from '../types'

const intervals: ContactInterval[] = ['Weekly', 'Bi-weekly', 'Monthly', 'Custom']
const relationshipOptions = ['Family', 'Friend', 'Colleague', 'Other'] as const

type AddContactPageProps = {
  onCancel: () => void
}

export function AddContactPage({ onCancel }: AddContactPageProps) {
  return (
    <div className="form-page">
      <section className="form-page__hero">
        <h2>Plant a Connection</h2>
        <p>
          Adding a new contact helps you nurture your social garden with
          intention and a cadence that matches the relationship.
        </p>
      </section>

      <form className="entry-form" onSubmit={(event) => event.preventDefault()}>
        <div className="entry-form__section">
          <label className="entry-form__label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            className="entry-form__input"
            type="text"
            placeholder="Who are you connecting with?"
          />
        </div>

        <div className="entry-form__section">
          <span className="entry-form__label">Relationship</span>
          <div className="option-chips">
            {relationshipOptions.map((option, index) => (
              <button
                key={option}
                type="button"
                className={
                  index === 0
                    ? 'option-chips__item option-chips__item--active'
                    : 'option-chips__item'
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="entry-form__section">
          <span className="entry-form__label">Contact Interval Preference</span>
          <div className="interval-grid">
            {intervals.map((interval, index) => (
              <button
                key={interval}
                type="button"
                className={
                  index === 0
                    ? 'interval-grid__item interval-grid__item--active'
                    : 'interval-grid__item'
                }
              >
                {interval}
              </button>
            ))}
          </div>
        </div>

        <div className="entry-form__tip">
          Setting an interval creates the growth ring around their photo. It
          cools blue when it has been too long and warms green when the
          relationship is freshly tended.
        </div>

        <div className="form-page__actions">
          <button type="submit" className="form-page__submit">
            Save Contact
          </button>
          <button type="button" className="form-page__cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

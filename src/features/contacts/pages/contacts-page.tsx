import { contacts } from '../data/mock-data'
import { ContactCard } from '../components/contact-card'

const filters = ['All', 'Family', 'Friends', 'Colleague'] as const

type ContactsPageProps = {
  isHistoryPreview?: boolean
}

export function ContactsPage({ isHistoryPreview = false }: ContactsPageProps) {
  if (isHistoryPreview) {
    return (
      <div className="contacts-page contacts-page--history-preview">
        <section className="hero-panel hero-panel--soft">
          <div className="hero-panel__copy">
            <p className="hero-panel__eyebrow">Next feature</p>
            <h2>History is planned next.</h2>
            <p>
              The history screen will turn logged calls, messages, and meetups
              into a readable relationship journal.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="contacts-page">
      <section className="contacts-toolbar">
        <label className="search-field">
          <span className="search-field__icon" aria-hidden="true">
            Search
          </span>
          <input type="search" placeholder="Search contacts..." />
        </label>

        <div className="filter-row" aria-label="Relationship filters">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={index === 0 ? 'filter-chip filter-chip--active' : 'filter-chip'}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="contacts-list-section">
        <div className="contacts-list-section__header">
          <h2>Your Social Circle</h2>
          <span>24 Contacts</span>
        </div>

        <div className="contacts-list">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </section>
    </div>
  )
}

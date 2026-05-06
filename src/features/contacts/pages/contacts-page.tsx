import { contacts } from '../data/mock-data'
import { ContactCard } from '../components/contact-card'

const filters = ['All', 'Family', 'Friends', 'Colleague'] as const

type ContactsPageProps = {
  onAddContact?: () => void
}

export function ContactsPage({ onAddContact }: ContactsPageProps) {
  return (
    <div className="contacts-page">
      <section className="contacts-page__header">
        <div>
          <p className="contacts-page__eyebrow">Circle Builder</p>
          <h2>Contacts</h2>
        </div>
        <button type="button" className="contacts-page__add-button" onClick={onAddContact}>
          Add contact
        </button>
      </section>

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

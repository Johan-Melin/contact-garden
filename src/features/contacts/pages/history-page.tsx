import { historyGroups } from '../data/mock-data'
import { FlowerIcon } from '../components/icons'
import { HistoryEntryCard } from '../components/history-entry-card'

export function HistoryPage() {
  return (
    <div className="history-page">
      <section className="history-page__header">
        <div>
          <p className="history-page__eyebrow">Growth Journal</p>
          <h2>History</h2>
        </div>
        <button type="button" className="history-page__add-button">
          Add
        </button>
      </section>

      <div className="history-page__groups">
        {historyGroups.map((group) => (
          <section key={group.id} className="history-group">
            <div className="history-group__label">
              <span aria-hidden="true" />
              <p>{group.label}</p>
              <span aria-hidden="true" />
            </div>
            <div className="history-group__entries">
              {group.entries.map((entry) => (
                <HistoryEntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="history-stats">
        <article className="history-stats__hero">
          <div className="history-stats__hero-copy">
            <p>Consistency Streak</p>
            <strong>12 Days</strong>
            <span>You&apos;ve nurtured 5 relationships this week. Keep growing.</span>
          </div>
          <FlowerIcon className="history-stats__hero-icon" />
        </article>

        <article className="history-stats__card">
          <p>Top Contact</p>
          <strong>John</strong>
        </article>

        <article className="history-stats__card history-stats__card--secondary">
          <p>Avg. Gap</p>
          <strong>4.2 Days</strong>
        </article>
      </section>
    </div>
  )
}

import { overdueReminders, upcomingReminders } from '../data/mock-data'
import { ReminderCard } from '../components/reminder-card'
import { SectionBlock } from '../components/section-block'
import { FlowerIcon, SparkIcon } from '../components/icons'

export function RemindersPage() {
  return (
    <div className="reminders-page">
      <section className="hero-panel">
        <div className="hero-panel__copy">
          <p className="hero-panel__eyebrow">Today&apos;s nurture pass</p>
          <h2>3 friends need a little sunshine today.</h2>
          <p>
            Garden keeps gentle track of who is cooling off so you can reconnect
            before it feels overdue.
          </p>
        </div>
        <div className="hero-panel__badge" aria-hidden="true">
          <FlowerIcon className="hero-panel__badge-flower" />
          <SparkIcon className="hero-panel__badge-spark" />
        </div>
      </section>

      <SectionBlock accentClassName="section-block__dot--urgent" title="Overdue">
        {overdueReminders.map((reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}
      </SectionBlock>

      <SectionBlock accentClassName="section-block__dot--upcoming" title="Upcoming">
        {upcomingReminders.map((reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}
      </SectionBlock>
    </div>
  )
}

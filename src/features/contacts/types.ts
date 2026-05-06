export type ReminderStatus = 'overdue' | 'upcoming'

export type ContactCategory = 'Family' | 'Friend' | 'Colleague'

export type ContactAction = 'call' | 'message'

export type Contact = {
  id: string
  name: string
  category: ContactCategory
  cadenceLabel: string
  statusLabel: string
  growthPercent: number
  action: ContactAction
  imageUrl: string
}

export type Reminder = {
  id: string
  name: string
  category: ContactCategory
  status: ReminderStatus
  note: string
  action: ContactAction
  accentColor: string
  imageUrl: string
}

export type TopLevelScreen = 'reminders' | 'contacts' | 'history'

import type { Contact, Reminder } from '../types'

export const overdueReminders: Reminder[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    category: 'Friend',
    status: 'overdue',
    note: '3 days overdue',
    action: 'message',
    accentColor: '#ba1a1a',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    category: 'Friend',
    status: 'overdue',
    note: '1 day overdue',
    action: 'call',
    accentColor: '#ba1a1a',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=80',
  },
]

export const upcomingReminders: Reminder[] = [
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    category: 'Family',
    status: 'upcoming',
    note: 'Tomorrow, 2:00 PM',
    action: 'message',
    accentColor: '#005fad',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'david-park',
    name: 'David Park',
    category: 'Colleague',
    status: 'upcoming',
    note: '12 days left',
    action: 'call',
    accentColor: '#005fad',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80',
  },
]

export const contacts: Contact[] = [
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    category: 'Family',
    cadenceLabel: 'Weekly',
    statusLabel: '2 days left',
    growthPercent: 75,
    action: 'call',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    category: 'Friend',
    cadenceLabel: 'Bi-weekly',
    statusLabel: 'Overdue',
    growthPercent: 32,
    action: 'message',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'david-park',
    name: 'David Park',
    category: 'Colleague',
    cadenceLabel: 'Monthly',
    statusLabel: '12 days left',
    growthPercent: 90,
    action: 'message',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'maya-thompson',
    name: 'Maya Thompson',
    category: 'Friend',
    cadenceLabel: 'Monthly',
    statusLabel: '5 days left',
    growthPercent: 64,
    action: 'call',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80',
  },
]

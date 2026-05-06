# AGENTS.md

## Project

`contact-garden` is a mobile-first contact reminder web app. The product metaphor is a "relationship garden": users track people, log interactions, and get reminded when relationships need attention.

## Current State

- The app shell is still the default Vite React starter.
- The design handoff lives in `stitch-export/`.
- `stitch-export/DESIGN.md` defines the visual system and product tone.
- There are five exported Stitch screens:
  - `stitch-export/reminders/`
  - `stitch-export/contacts/`
  - `stitch-export/history/`
  - `stitch-export/add_contact/`
  - `stitch-export/add_event/`

## Source Of Truth

When implementing UI in this repo, use this priority order:

1. Product intent from this file and `docs/plan.md`
2. Visual system from `stitch-export/DESIGN.md`
3. Screen structure and interaction cues from each `stitch-export/*/code.html`
4. Screenshot comparison from each `stitch-export/*/screen.png`

Do not treat exported Stitch HTML as production code. Use it as reference material and rebuild the interface as maintainable React components and app styles.

## Implementation Guidelines

- Preserve the mobile-first layout and keep the primary viewport optimized for phones.
- Stay close to the Stitch design language:
  - warm surface tones
  - deep green primary actions
  - soft blue reminder states
  - rounded cards and controls
  - generous spacing
- Favor a reusable component structure over page-local markup duplication.
- Organize contact-domain implementation under `src/features/contacts`.
- Prefer colocating screen modules, components, mock data, and domain utilities inside `src/features/contacts` instead of scattering them across generic top-level folders.
- Keep app code framework-native. Do not pull Tailwind in just to mirror the Stitch export unless explicitly requested.
- Replace placeholder/demo content from the Vite starter immediately when touching app UI.
- Prefer local/mock data first, then introduce persistence or backend integration in a later step unless requested otherwise.

## Product Model

The app should support these core entities:

- Contact
  - name
  - relationship category
  - preferred contact interval
  - avatar or initials
- Event
  - contact
  - date
  - connection type
  - notes
- Reminder state
  - upcoming
  - due
  - overdue

## Screen Intent

- `reminders`: dashboard showing overdue and upcoming outreach
- `contacts`: searchable contact list with relationship status
- `history`: chronological interaction log
- `add_contact`: create a contact and contact cadence
- `add_event`: log a call, message, meeting, or similar interaction

## Working Rules For Codex

- Before large UI changes, inspect the relevant Stitch screen HTML and screenshot together.
- Keep typography and spacing tokens centralized.
- Prefer composition like `AppShell`, `TopBar`, `BottomNav`, `ContactCard`, `ReminderCard`, `SectionHeader`, and form field primitives.
- Default feature structure:
  - `src/features/contacts/pages`
  - `src/features/contacts/components`
  - `src/features/contacts/data`
  - `src/features/contacts/lib`
  - `src/features/contacts/types.ts`
- If implementation diverges from Stitch for maintainability or usability, keep the product behavior and visual tone aligned and document the tradeoff in the final message.

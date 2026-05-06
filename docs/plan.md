# Plan

## Objective

Turn the current Vite starter into a mobile-first contact reminder web app based on the Stitch handoff in `stitch-export/`.

## Product Summary

Garden helps users maintain meaningful relationships by:

- tracking contacts
- setting a preferred follow-up cadence
- showing upcoming and overdue reminders
- logging interactions over time

## Handoff Assets

- Design system: `stitch-export/DESIGN.md`
- Screens:
  - `stitch-export/reminders/`
  - `stitch-export/contacts/`
  - `stitch-export/history/`
  - `stitch-export/add_contact/`
  - `stitch-export/add_event/`

## Initial Build Plan

### Phase 1: App Foundation

- Remove the Vite starter UI.
- Set up app-wide design tokens in CSS for colors, radius, spacing, and typography.
- Load the two primary fonts from the Stitch handoff:
  - `Plus Jakarta Sans`
  - `Be Vietnam Pro`
- Set up feature-first source structure with the contact app code living in `src/features/contacts`.
- Create a mobile app shell with:
  - top bar
  - centered max-width container
  - persistent bottom navigation for top-level screens

### Phase 2: Shared UI Components

- Build reusable components for:
  - cards
  - chips
  - avatar with growth ring
  - section headers
  - buttons
  - text inputs
  - segmented/radio option groups
- Keep shadows, spacing, and rounding consistent with `stitch-export/DESIGN.md`.
- Keep these shared contact-domain UI pieces under `src/features/contacts/components`.

### Phase 3: Screen Implementation

- Implement `reminders` as the default landing screen.
- Implement `contacts` with:
  - search
  - relationship filters
  - contact cards
- Implement `history` as grouped chronological entries.
- Implement `add_contact` as a focused form flow.
- Implement `add_event` as a focused form flow.

### Phase 4: Interaction Model

- Add lightweight client-side navigation between the five screens.
- Use local mock data for contacts, reminders, and history.
- Compute reminder status from:
  - last interaction date
  - preferred interval

## Suggested Source Layout

```text
src/
  features/
    contacts/
      components/
      data/
      lib/
      pages/
      types.ts
  App.tsx
  main.tsx
```

Notes:

- Keep contact-related screens inside `src/features/contacts/pages`.
- Keep reusable contact UI inside `src/features/contacts/components`.
- Keep mock contacts, reminders, and history data inside `src/features/contacts/data`.
- Keep reminder calculations and selectors inside `src/features/contacts/lib`.

### Phase 5: Refinement

- Match spacing and hierarchy against the screenshots.
- Verify touch target sizes on mobile.
- Ensure the layout still reads well on wider screens up to the 600px handheld-style max width.

## Suggested Order Of Work

1. App shell and design tokens
2. Bottom navigation and top bar
3. Reminder dashboard
4. Contact list
5. History list
6. Add contact form
7. Add event form
8. Mock data and reminder calculations
9. Visual polish and responsive review

## Non-Goals For First Pass

- Authentication
- Backend sync
- Push notifications
- Real image upload
- Full settings flow

## Definition Of Done

- The Vite starter content is gone.
- All five Stitch screens exist in the app in React form.
- The app feels coherent as one product rather than five isolated mockups.
- Styling reflects the Garden design system instead of default Vite styles.
- The result works well on a phone-sized viewport.

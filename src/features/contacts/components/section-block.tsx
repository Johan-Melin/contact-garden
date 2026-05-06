import type { PropsWithChildren } from 'react'

type SectionBlockProps = PropsWithChildren<{
  accentClassName: string
  title: string
}>

export function SectionBlock({ accentClassName, title, children }: SectionBlockProps) {
  return (
    <section className="section-block">
      <div className="section-block__header">
        <span className={`section-block__dot ${accentClassName}`} aria-hidden="true" />
        <h2>{title}</h2>
      </div>
      <div className="section-block__content">{children}</div>
    </section>
  )
}

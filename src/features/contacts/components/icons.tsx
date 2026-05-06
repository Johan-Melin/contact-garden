import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function iconProps(props: IconProps) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }
}

export function FlowerIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 13.5c-1.6 0-3-1.4-3-3.1S10.4 7.2 12 7.2s3 1.5 3 3.2-1.4 3.1-3 3.1Z" />
      <path d="M12 3.5c1.8 0 3 1.3 3 3.1 0 .6-.2 1.1-.4 1.6" />
      <path d="M20.1 8.6c.8 1.6.3 3.5-1.3 4.3-.5.3-1.1.4-1.6.4" />
      <path d="M18.1 17.5c-1 1.4-2.9 1.7-4.3.8-.5-.3-.8-.7-1.1-1.2" />
      <path d="M5.9 17.5c1 1.4 2.9 1.7 4.3.8.5-.3.8-.7 1.1-1.2" />
      <path d="M3.9 8.6c-.8 1.6-.3 3.5 1.3 4.3.5.3 1.1.4 1.6.4" />
      <path d="M12 13.5V20.5" />
    </svg>
  )
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
    </svg>
  )
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M4 5.5h16v9.5H8l-4 4v-13.5Z" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M7.3 4.8c.5-.5 1.3-.6 1.9-.2l2.1 1.4c.6.4.8 1.2.4 1.9l-1 1.7a13.2 13.2 0 0 0 4.7 4.7l1.7-1c.7-.4 1.5-.2 1.9.4l1.4 2.1c.4.6.3 1.4-.2 1.9l-1.3 1.3c-.6.6-1.6.9-2.5.7-3.1-.8-6.2-3-8.8-5.6-2.6-2.6-4.8-5.7-5.6-8.8-.2-.9.1-1.9.7-2.5l1.3-1.3Z" />
    </svg>
  )
}

export function BellIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M8 17h8" />
      <path d="M9 17v-5a3 3 0 0 1 6 0v5l1.4 2.5H7.6L9 17Z" />
      <path d="M10.5 20a1.5 1.5 0 0 0 3 0" />
    </svg>
  )
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M8 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M16.5 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
      <path d="M13.5 19a3.5 3.5 0 0 1 7 0" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8.5v4l2.5 1.5" />
    </svg>
  )
}

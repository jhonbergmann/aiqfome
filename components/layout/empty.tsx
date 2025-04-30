import Link from 'next/link'
import {LucideIcon} from 'lucide-react'

interface EmptyProps {
  icon: LucideIcon
  title: string
  description: string
  buttonLabel?: string
  buttonHref?: string
}

export default function Empty({icon: Icon, title, description, buttonLabel, buttonHref}: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <Icon size={64} className="mb-4 text-gray-300" />
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-6 text-center text-gray-500">{description}</p>
      {buttonHref && (
        <Link href={buttonHref}>
          <button className="rounded-lg bg-primary px-6 py-3 text-white">{buttonLabel}</button>
        </Link>
      )}
    </div>
  )
}

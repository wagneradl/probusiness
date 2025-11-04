import { cn } from '@/app/_lib/utils'
import { Square } from 'lucide-react'

interface ChecklistProps {
  children: React.ReactNode
  className?: string
}

export function Checklist({ children, className }: ChecklistProps) {
  return <ul className={cn('space-y-2 my-4', className)}>{children}</ul>
}

interface ChecklistItemProps {
  children: React.ReactNode
  className?: string
}

export function ChecklistItem({ children, className }: ChecklistItemProps) {
  return (
    <li
      className={cn(
        'flex items-start gap-3 p-3 bg-gray-50 rounded-md',
        className
      )}
    >
      <Square className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
      <span className="flex-1">{children}</span>
    </li>
  )
}

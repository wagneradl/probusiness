import { cn } from '@/app/_lib/utils'

interface BudgetTotalProps {
  children: React.ReactNode
  className?: string
}

export function BudgetTotal({ children, className }: BudgetTotalProps) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground',
        'text-2xl font-bold text-center',
        'p-6 rounded-lg my-5',
        className
      )}
    >
      {children}
    </div>
  )
}

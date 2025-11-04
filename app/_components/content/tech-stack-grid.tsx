import { cn } from '@/app/_lib/utils'

interface TechStackGridProps {
  children: React.ReactNode
  className?: string
}

export function TechStackGrid({ children, className }: TechStackGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5',
        className
      )}
    >
      {children}
    </div>
  )
}

interface TechStackItemProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function TechStackItem({ title, children, className }: TechStackItemProps) {
  return (
    <div
      className={cn(
        'bg-blue-50 p-4 rounded-lg border-l-4 border-l-primary',
        className
      )}
    >
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

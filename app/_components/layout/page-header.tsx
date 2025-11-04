import { cn } from '@/app/_lib/utils'

interface PageHeaderProps {
  title: string
  subtitle?: string
  meta?: React.ReactNode
  className?: string
}

export function PageHeader({ title, subtitle, meta, className }: PageHeaderProps) {
  return (
    <header
      className={cn(
        'bg-gradient-to-br from-primary to-blue-800',
        'text-primary-foreground',
        'p-8 rounded-lg mb-10',
        className
      )}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
      {subtitle && <div className="text-xl opacity-90 mb-4">{subtitle}</div>}
      {meta && <div className="text-sm opacity-85">{meta}</div>}
    </header>
  )
}

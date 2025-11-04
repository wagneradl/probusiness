import { cn } from '@/app/_lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  level?: 2 | 3 | 4
  className?: string
}

export function SectionTitle({ children, level = 2, className }: SectionTitleProps) {
  const baseClasses = 'font-bold text-primary mt-10 mb-5'
  
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  
  const sizeClasses = {
    2: 'text-3xl border-b-4 border-primary pb-3',
    3: 'text-2xl',
    4: 'text-xl',
  }

  return (
    <Component className={cn(baseClasses, sizeClasses[level], className)}>
      {children}
    </Component>
  )
}

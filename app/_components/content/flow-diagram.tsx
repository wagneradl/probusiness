import { cn } from '@/app/_lib/utils'

interface FlowDiagramProps {
  children: React.ReactNode
  className?: string
}

export function FlowDiagram({ children, className }: FlowDiagramProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-blue-50 p-6 my-5',
        'font-mono text-sm leading-relaxed',
        'overflow-x-auto whitespace-pre-wrap',
        'border border-blue-100',
        className
      )}
    >
      {children}
    </div>
  )
}

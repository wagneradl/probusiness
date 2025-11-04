import { cn } from '@/app/_lib/utils'

interface PrintableBoxProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function PrintableBox({ children, className, title }: PrintableBoxProps) {
  return (
    <div
      className={cn(
        'border-4 border-dashed border-primary rounded-lg p-6 my-5',
        'bg-gray-50 text-center font-mono',
        className
      )}
    >
      {title && <div className="font-bold mb-4 text-lg">{title}</div>}
      {children}
    </div>
  )
}

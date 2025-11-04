import { cn } from '@/app/_lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const timelineItemVariants = cva(
  'p-4 my-3 border-l-4 rounded-r-md',
  {
    variants: {
      variant: {
        default: 'bg-gray-50 border-l-primary',
        urgent: 'bg-red-50 border-l-destructive',
        done: 'bg-green-50 border-l-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn('space-y-2 my-5', className)}>{children}</div>
}

interface TimelineItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineItemVariants> {
  children: React.ReactNode
}

export function TimelineItem({ children, variant, className, ...props }: TimelineItemProps) {
  return (
    <div className={cn(timelineItemVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

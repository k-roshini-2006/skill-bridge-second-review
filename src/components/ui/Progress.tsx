import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  color?: 'indigo' | 'green' | 'amber' | 'red' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  label?: string
}

const colorClasses = {
  indigo: 'bg-indigo-500',
  green: 'bg-green-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
}

const sizeClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
}

export function Progress({
  value,
  max = 100,
  color = 'indigo',
  size = 'md',
  showLabel = false,
  label,
  className,
  ...props
}: ProgressProps) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn('w-full', className)} {...props}>
      {(showLabel || label) && (
        <div className="flex justify-between mb-1.5">
          {label && <span className="text-sm text-gray-600">{label}</span>}
          {showLabel && <span className="text-sm font-medium text-gray-700">{Math.round(percent)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-gray-100 rounded-full overflow-hidden', sizeClasses[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-500', colorClasses[color])}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'custom'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  ariaPressed?: boolean
  ariaExpanded?: boolean
  className?: string
}

const baseStyles =
  'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors'

const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500',
  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring-gray-400',
  ghost:
    'bg-transparent text-gray-800 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-300',
  custom: '', // No default styles for custom
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

export function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      className={clsx(
        baseStyles,
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        variant !== 'custom' && variants[variant],
        className
      )}
    >
      {children}
    </button>
  )
}

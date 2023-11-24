import { InputHTMLAttributes } from 'react'
import { FieldError, Control } from 'react-hook-form'
import { IconBaseProps } from 'react-icons'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  error?: FieldError
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any, any>
  icon?: React.ComponentType<IconBaseProps>
  typePassword?: boolean
}

export type StyledContainerProps = {
  isFilled?: boolean
  hasError?: boolean
  isDisabled?: boolean
  typePassword?: boolean
}

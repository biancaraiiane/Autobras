import { InputHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'
import { IconBaseProps } from 'react-icons'

export type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  name: string
  label?: string
  icon?: React.ComponentType<IconBaseProps>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>
  defaultOption?: {
    value: string
    title: string
  }[]
  options: {
    value: string
    title: string
  }[]
}

export type StyledContainerProps = {
  isFilled: boolean
  hasError: boolean
}

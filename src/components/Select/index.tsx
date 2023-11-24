/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form'

import * as S from './styles'
import { SelectProps } from './types'

export function Select({
  control,
  name,
  label,
  defaultOption,
  options,
  icon: Icon,
  ...rest
}: SelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error, isDirty } }) => (
        <S.Container>
          {label && <S.Label htmlFor={name}>{label}</S.Label>}

          <S.SelectContainer
            className="select"
            isFilled={isDirty}
            hasError={!!error}
            aria-label={`${name}-container`}
          >
            {Icon && <Icon />}

            <S.Select id={name} {...rest} {...field}>
              {defaultOption?.map((option: { title: any; value: any }) => (
                <S.Option key={option.title} value={option.value}>
                  {option.title}
                </S.Option>
              ))}
              {options?.map((option: { title: any; value: any }) => (
                <S.Option key={option.title} value={option.value}>
                  {option.title}
                </S.Option>
              ))}
            </S.Select>
          </S.SelectContainer>

          {error && <S.Error>{error.message}</S.Error>}
        </S.Container>
      )}
    />
  )
}

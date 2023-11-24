import { useMemo, useState } from 'react'
import { Controller } from 'react-hook-form'
import { IconContext } from 'react-icons'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsExclamation } from 'react-icons/bs'

import { useTheme } from 'styled-components'

import * as S from './styles'
import { InputProps } from './types'

export function Input({
  name,
  label,
  type,
  typePassword,
  control,
  disabled,
  icon: Icon,
  ...rest
}: InputProps) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const { colors } = useTheme()

  const inputType = isPasswordHidden ? 'password' : 'text'

  const handleClick = () => {
    setIsPasswordHidden((prevState) => !prevState)
  }

  const iconContextProviderValue = useMemo(
    () => ({
      color: colors.gray[200]
    }),
    [colors.gray]
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error, isDirty } }) => (
        <S.Container>
          {label && <S.Label htmlFor={name}>{label}</S.Label>}
          <S.ContainerInput
            isFilled={isDirty}
            hasError={!!error}
            isDisabled={disabled}
            typePassword={typePassword}
            aria-label={`${name}-container`}
          >
            {Icon && <Icon />}

            <S.Input
              type={type || inputType}
              id={name}
              hasError={!!error}
              disabled={disabled}
              {...rest}
              {...field}
            />

            {typePassword && (
              <S.HidePasswordButtonContainer>
                <button type="button" onClick={handleClick}>
                  <IconContext.Provider value={iconContextProviderValue}>
                    {isPasswordHidden ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </IconContext.Provider>
                </button>
              </S.HidePasswordButtonContainer>
            )}
            {error && (
              <S.ErrorContainer>
                <BsExclamation color={colors.danger} />
              </S.ErrorContainer>
            )}
          </S.ContainerInput>
          {error && <S.Error>{error?.message}</S.Error>}
        </S.Container>
      )}
    />
  )
}

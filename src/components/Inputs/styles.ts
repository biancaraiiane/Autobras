import styled, { css } from 'styled-components'

import { StyledContainerProps } from './types'

export const ContainerInput = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  width: 100%;
  height: 50px;
  padding-left: 16px;
  transition: all 100ms;
  margin-bottom: 0.5rem;

  div {
    margin-top: 0.5rem;
  }

  svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  svg:first-child {
    margin-right: 0.625rem;
  }

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border: 2px solid ${theme.colors.green};
      svg {
        color: ${theme.colors.green};
      }
    `}

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 2px solid ${theme.colors.danger};
      svg {
        color: ${theme.colors.danger};
      }
    `}

    ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background: ${theme.colors.gray[50]};
      border: 2px solid ${theme.colors.gray[200]};
      svg {
        color: ${theme.colors.gray[200]};
      }
    `}

    @media (max-width: 379px) {
    height: 30px;
    width: 80%;
  }
`

export const Input = styled.input<StyledContainerProps>`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[300]};
  padding: 1rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 0.875rem;
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      &::placeholder {
        color: ${theme.colors.danger};
      }
    `}
`

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 0.875rem;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-family: 'Istok Web';

  @media (max-width: 442px) {
    font-size: 10px;
  }
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;
  text-align: end;
  margin-bottom: 0.5rem;
  padding-right: 0.5rem;
  font-family: 'Istok Web';

  @media (max-width: 768px) {
    text-align: start; /* Altera o alinhamento do texto para o início em telas menores que 768px */
    padding-right: 0; /* Remove o preenchimento à direita em telas menores que 768px */
  }

  @media (max-width: 442px) {
    font-size: 10px;
  }
`

export const HidePasswordButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 0.3rem;

  button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 0 !important;
    }
  }
`

export const ErrorContainer = styled(HidePasswordButtonContainer)``

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

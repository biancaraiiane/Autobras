import styled, { css } from 'styled-components'

import { StyledContainerProps } from './types'

export const Container = styled.div`
  width: 100%;
`

export const SelectContainer = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  width: 100%;
  height: 50px;
  padding-left: 16px;
  padding-right: 8px;
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

    @media (max-width: 379px) {
    height: 30px;
    width: 80%;
  }
`

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-family: 'Istok Web';

  @media (max-width: 442px) {
    font-size: 10px;
  }
`

export const Select = styled.select`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.black[200]};
  font-family: 'Istok Web';
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 442px) {
    font-size: 12px;
  }
`

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.gray[200]};
  outline: none;
  min-height: 5rem;
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;
  text-align: end;
  margin: 0.5rem 0;
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

export const DatePickerContainer = styled.div<StyledContainerProps>`
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
`

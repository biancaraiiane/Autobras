import { PropsWithChildren } from 'react'

import { StyledProvider } from './styles'

export function AppProvider({ children }: PropsWithChildren) {
  return <StyledProvider>{children}</StyledProvider>
}

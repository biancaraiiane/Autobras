import { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/globalStyles'
import { theme } from 'styles/theme'

export function StyledProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

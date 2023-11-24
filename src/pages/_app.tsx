// import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { Helmet } from 'react-helmet'

import { AppProvider } from 'contexts'
import GlobalStyles from 'styles/globalStyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider {...pageProps}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Istok+Web&family=Yanone+Kaffeesatz:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  )
}

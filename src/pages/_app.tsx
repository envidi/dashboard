import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
// export default App;

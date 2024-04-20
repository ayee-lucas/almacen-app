

import '@/styles/globals.css'
import '@/styles/animation.css'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
      <Component {...pageProps} />
  )
}
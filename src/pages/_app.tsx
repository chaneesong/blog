import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

import '@/styles/globals.css';
import wrapper from '@/store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

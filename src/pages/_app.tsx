import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

import '@/styles/globals.css';
import wrapper from '@/redux';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

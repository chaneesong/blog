import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import store from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

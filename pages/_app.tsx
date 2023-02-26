
import type { AppProps } from 'next/app'
import { ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/react-Toastify.css';

export default function App({ Component, pageProps }: AppProps) {
  
  return (<>
  <Component {...pageProps} />
  </>)}

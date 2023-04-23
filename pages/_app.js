import '../styles/globals.css'
import '../lib/hexStyle.css'
import {TwitterPovider} from '../context/TwitterContext'

function MyApp({ Component, pageProps }) {
  return (
    <TwitterPovider>
      <Component {...pageProps} />
    </TwitterPovider>
  )
}

export default MyApp

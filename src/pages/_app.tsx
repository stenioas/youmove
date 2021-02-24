import '../styles/global.css';

import { ChallegensProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallegensProvider>
      <Component {...pageProps} />
    </ChallegensProvider>
  )
}

export default MyApp

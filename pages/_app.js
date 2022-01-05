import '../styles/globals.scss'
import BaseLayout from "../components/layouts/base/BaseLayout";

function MyApp({ Component, pageProps }) {
  return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
  )
}

export default MyApp

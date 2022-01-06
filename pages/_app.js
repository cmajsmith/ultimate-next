import '../styles/globals.scss'
import BaseLayout from "../components/layouts/base/BaseLayout";
import {DefaultSeo} from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
      <BaseLayout>
        <DefaultSeo
            title="Default Page Title"
            description="Default Page Description"
        />
        <Component {...pageProps} />
      </BaseLayout>
  )
}

export default MyApp

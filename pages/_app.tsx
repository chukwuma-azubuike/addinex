import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { client } from './config/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp

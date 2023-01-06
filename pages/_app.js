import "../styles/globals.css";
import Layout from "../components/Layout";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  headers: {
    authorization: "10642_luxWvWNYTnuXO7IZWojGfyogzH1saPRlUih7LqUS",
  },
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) { 
  console.log(client);
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );

  // return <Component {...pageProps} />
}

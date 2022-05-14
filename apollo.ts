import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://youtube.thorsteinsson.is/graphql",
  cache: new InMemoryCache()
});

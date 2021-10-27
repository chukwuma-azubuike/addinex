import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://fakeql.com/graphql/3cf0456f3cc2f4a25d7019ab61f7fb86',
    cache: new InMemoryCache()
});
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://fakeql.com/graphql/5a3d0f49909f1090703a7c0254bc99f4',
    cache: new InMemoryCache()
});
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    ssrMode: true,
    // uri:'https://fakeql.com/graphql/3cf0456f3cc2f4a25d7019ab61f7fb86',
    // uri:'https://fakeql.com/graphql/5348b8b9d7ef2ac999c91f15028a6157',
    // uri:'https://fakeql.com/graphql/f4beea01a135e67367cbbf2b7bc9f6d0',
    // uri:'https://fakeql.com/graphql/812cd349d7171c05c1d014ce2307013e',
    uri:'https://fakeql.com/graphql/be4e50361aae5874c586dbb469b0afe2',
    // uri: 'https://fakeql.com/graphql/5a3d0f49909f1090703a7c0254bc99f4',
    cache: new InMemoryCache()
});
import {
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";
const client = new ApolloClient({
    uri: 'https://exercisegraph.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'ty54o2COUNDzGx5xiuwXCK7kcZmC1qC6NtdpYn7HRM2ZCoxZy1E1ogaXSilMc7uH'
    }
  });

  export default client;
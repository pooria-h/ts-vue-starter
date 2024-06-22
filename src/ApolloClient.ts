import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { URL } from '@/constants/GraphQLConfig';

const httpLink = createHttpLink({
  uri: URL,
});
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;

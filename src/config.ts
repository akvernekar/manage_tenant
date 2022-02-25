import { ApolloClient, InMemoryCache} from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const baseUrl = "https://hungry-skinny-cappelletti.glitch.me/";

const restLink = new RestLink({ uri: baseUrl });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});
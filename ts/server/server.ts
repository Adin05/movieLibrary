import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getData } from '../models/User.js'

const typeDefs = `#graphql
  type User {
    firstName: String
    lastName: String
  }

  type Query {
    greeting: String
    getData: [User]
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!👋",
    getData: async () => await getData() ,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

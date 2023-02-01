import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
  type Query {
    greeting: String
  }
`;
const resolvers = {
    Query: {
        greeting: () => "Hello GraphQL world!👋",
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
export async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

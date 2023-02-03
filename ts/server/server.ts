import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getData } from '../models/User.js'
import { getAuthors, getAuthor } from '../services/list.js'

const typeDefs = `#graphql
  type User {
    firstName: String
    lastName: String
  }

  type Author {
    id: Int
    authorName: String
  }

  type Query {
    greeting: String
    getData: [User]
    getAuthors: [Author]
    getAuthor(id: Int): Author
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!👋",
    getData: async () => await getData() ,
    getAuthors: async () => await getAuthors() ,
    // getAuthor: async (_parent, args, _contextValue) => await getAuthor(args.id) ,
    async getAuthor(parent: any, args: { id: number; }, contextValue: any, info: any) {
      return await getAuthor(args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

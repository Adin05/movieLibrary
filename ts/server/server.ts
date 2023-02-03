import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getData } from '../models/User.js'
import { getAuthors, getAuthor } from '../services/list.js'
import { createAuthor } from '../services/create.js';

const typeDefs = `#graphql
  type User {
    firstName: String
    lastName: String
  }

  type Author {
    id: Int
    authorName: String
  }

  type Movie {
    id: Int
    movieName: String
    authorId: Int
  }

  type Actor {
    id: Int
    actorName: String
    movieId: Int
  }

  type Query {
    greeting: String
    getData: [User]
    getAuthors: [Author]
    getAuthor(id: Int): Author
  }

  type Mutation {
    addAuthor(authorName: String): Author
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!👋",
    getData: async () => await getData() ,
    getAuthors: async () => await getAuthors() ,
    async getAuthor(parent: any, args: { id: number; }, contextValue: any, info: any) {
      return await getAuthor(args.id);
    }
  },
  Mutation:{
    async addAuthor(parent: any, args: any, contextValue: any, info: any){
      const x = await createAuthor(args.authorName);
      console.log(args.authorName, x);
      return x;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

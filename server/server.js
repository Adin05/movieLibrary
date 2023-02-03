import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getData } from '../models/User.js';
import { getAuthors, getAuthor, createAuthor, updateAuthor } from '../services/index.js';
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
    editAuthor(id:Int, authorName: String): String

  }
`;
const resolvers = {
    Query: {
        greeting: () => "Hello GraphQL world!👋",
        getData: async () => await getData(),
        getAuthors: async () => await getAuthors(),
        async getAuthor(parent, args, contextValue, info) {
            return await getAuthor(args.id);
        }
    },
    Mutation: {
        async addAuthor(parent, args, contextValue, info) {
            const x = await createAuthor(args.authorName);
            console.log(args.authorName, x);
            return x;
        },
        async editAuthor(parent, args, contextValue, info) {
            const x = await updateAuthor(args.id, args.authorName);
            console.log(args.authorName, x);
            return x;
        },
    }
};
const server = new ApolloServer({ typeDefs, resolvers });
export async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

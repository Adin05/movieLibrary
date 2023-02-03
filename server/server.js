import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getData } from '../models/User.js';
import { getAuthors, getAuthor } from '../services/list.js';
const typeDefs = `#graphql
  type User {
    firstName: String
    lastName: String
  }

  type Author {
    id: Int
    author_name: String
  }

  type Movie {
    id: Int
    movie_name: String
    authorId: Int
  }

  type Actor {
    id: Int
    actor_name: String
    movieId: Int
  }

  type Query {
    greeting: String
    getData: [User]
    getAuthors: [Author]
    getAuthor(id: Int): Author
  }

  type Mutation {
    addAuthor(title: String, author: String): Author
  }
`;
const resolvers = {
    Query: {
        greeting: () => "Hello GraphQL world!👋",
        getData: async () => await getData(),
        getAuthors: async () => await getAuthors(),
        // getAuthor: async (_parent, args, _contextValue) => await getAuthor(args.id) ,
        async getAuthor(parent, args, contextValue, info) {
            return await getAuthor(args.id);
        },
        // addAuthor(title: "Fox in Socks", author: "Dr. Seuss") {
        //   title
        //   author {
        //     author_name
        //   }
        // }
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
export async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

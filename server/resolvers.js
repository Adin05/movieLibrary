import { getData } from "../models/User.js";
import { getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor, getMovie, getMovies, createMovie, updateMovie, deleteMovie, } from "../services/index.js";
export const resolvers = {
    Query: {
        greeting: () => "Hello GraphQL world!👋",
        getData: async () => await getData(),
        getAuthors: async () => await getAuthors(),
        async getAuthor(parent, args, contextValue, info) {
            return await getAuthor(args.id);
        },
        getMovies: async () => await getMovies(),
        async getMovie(parent, args, contextValue, info) {
            return await getMovie(args.id);
        },
    },
    Mutation: {
        async addAuthor(parent, args, contextValue, info) {
            const author = await createAuthor(args.authorName);
            console.log(args.authorName, author);
            return author;
        },
        async editAuthor(parent, args, contextValue, info) {
            return await updateAuthor(args.id, args.authorName);
        },
        async deleteAuthor(parent, args, contextValue, info) {
            return await deleteAuthor(args.id);
        },
        async addMovie(parent, args, contextValue, info) {
            const x = await createMovie(args.movieName, args.authorID);
            console.log(args.movieName, x);
            return x;
        },
        async editMovie(parent, args, contextValue, info) {
            return await updateMovie(args.id, args.movieName);
        },
        async deleteMovie(parent, args, contextValue, info) {
            return await deleteMovie(args.id);
        },
    },
};

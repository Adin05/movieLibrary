import { getData } from "../models/User.js";
import {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getActor,
  getActors,
  createActor,
  updateActor,
  deleteActor,
} from "../services/index.js";
export const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!👋", //example
    getData: async () => await getData(), //example

    getAuthors: async () => await getAuthors(),
    async getAuthor(
      parent: any,
      args: { id: number },
      contextValue: any,
      info: any
    ) {
      return await getAuthor(args.id);
    },

    getMovies: async () => await getMovies(),
    async getMovie(
      parent: any,
      args: { id: number },
      contextValue: any,
      info: any
    ) {
      return await getMovie(args.id);
    },

    getActors: async () => await getActors(),
    async getActor(
      parent: any,
      args: { id: number },
      contextValue: any,
      info: any
    ) {
      return await getActor(args.id);
    },
  },
  Mutation: {
    async addAuthor(parent: any, args: any, contextValue: any, info: any) {
      const author = await createAuthor(args.authorName);
      console.log(args.authorName, author);
      return author;
    },
    async editAuthor(parent: any, args: any, contextValue: any, info: any) {
      return await updateAuthor(args.id, args.authorName);
    },
    async deleteAuthor(parent: any, args: any, contextValue: any, info: any) {
      return await deleteAuthor(args.id);
    },

    async addMovie(parent: any, args: any, contextValue: any, info: any) {
      const x = await createMovie(args.movieName, args.authorID);
      console.log(args.movieName, x);
      return x;
    },
    async editMovie(parent: any, args: any, contextValue: any, info: any) {
      return await updateMovie(args.id, args.movieName);
    },
    async deleteMovie(parent: any, args: any, contextValue: any, info: any) {
      return await deleteMovie(args.id);
    },

    async addActor(parent: any, args: any, contextValue: any, info: any) {
      const x = await createActor(args.actorName);
      console.log(args.actorName, x);
      return x;
    },
    async editActor(parent: any, args: any, contextValue: any, info: any) {
      return await updateActor(args.id, args.actorName);
    },
    async deleteActor(parent: any, args: any, contextValue: any, info: any) {
      return await deleteActor(args.id);
    },
  },
};

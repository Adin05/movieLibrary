export const typeDefs = `#graphql
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
  authorID: Int
  authorName: String
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

  getMovies: [Movie]
  getMovie(id: Int): Movie
}

type Mutation {
  addAuthor(authorName: String): Author
  editAuthor(id:Int, authorName: String): String
  deleteAuthor(id:Int): String

  addMovie(movieName: String, authorID: Int): Movie
  editMovie(id:Int, movieName: String): String
  deleteMovie(id:Int): String
}
`;

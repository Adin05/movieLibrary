
import { Author } from '../models/index.js'

export async function getAuthors() {
    // the defined model is the class itself
    const data = await Author.findAll();
  //   console.log("All users:", JSON.stringify(users, null, 2));
    return data;
  }
  
  export async function getAuthor(id:number) {
    // the defined model is the class itself
    const data = await Author.findAll({
      where: {
        id: id
      }
    });
    // console.log("All users:", JSON.stringify(data, null, 2));
    return data[0];
  }
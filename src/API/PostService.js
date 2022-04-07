export default class PostService {
  static getAll = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
    const posts = await response.json();
    return posts;
  }
}
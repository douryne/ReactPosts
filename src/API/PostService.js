import axios from "axios";

export default class PostService {
  static getAll = async (limit=10, page=1) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: limit,
        _page: page
      }
    });
    return response;
  }

  static getById = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
  }

  static getCommentsByPostId = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }
}
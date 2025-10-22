const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const jsonPlaceholderApi = {
  // Users
  getUsers: () => fetch(`${BASE_URL}/users`).then(res => res.json()),
  
  // Posts
  getPosts: (page = 1, limit = 10) => 
    fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`).then(res => res.json()),
  
  getPost: (id) => 
    fetch(`${BASE_URL}/posts/${id}`).then(res => res.json()),
  
  // Todos
  getTodos: () => 
    fetch(`${BASE_URL}/todos`).then(res => res.json()),
  
  // Search posts
  searchPosts: (query) =>
    fetch(`${BASE_URL}/posts?q=${query}`).then(res => res.json()),
};
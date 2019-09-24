import axios from "axios";
const BASEURL = `https://www.googleapis.com/books/v1/volumes?key=${process.env.GOOGLEBOOKSAPI_key}&q=`;


export default {
  searchTitles: function(query) {
    return axios.get(BASEURL + query + "+intitle:");
  },
  getBooks: function() {
      return axios.get('/api/books');
  },
  saveBook: function(book) {
      return axios.post('/api/books', book);
  },
  removeBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
};

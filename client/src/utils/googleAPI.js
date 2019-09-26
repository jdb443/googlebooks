import axios from "axios";
const BASEURL = `https://www.googleapis.com/books/v1/volumes?key=${process.env.REACT_APP_GOOGLEBOOKSAPI_key}&q=`;
console.log(process.env.REACT_APP_GOOGLEBOOKSAPI_key);


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

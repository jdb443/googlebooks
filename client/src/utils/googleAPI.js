import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyBFDl-hf6zCj-Pp2HD6VINd75YMRHMZduc&q=";


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

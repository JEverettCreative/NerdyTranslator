import axios from "axios";

export default {
  // Gets Quote of the Day
  getQuote: function() {
    return axios.get("https://quotes.rest/qod");
  }
};

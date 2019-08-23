import axios from "axios";

export default {
  // Gets Quote of the Day
  translateQuote: function(quote, choice) {
    return axios.post("https://api.funtranslations.com/translate/" + choice + "?text=" + quote);
  }
};
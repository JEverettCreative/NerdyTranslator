import axios from "axios";

export default {
  // Gets Quote of the Day
  translateQuote: function(quote) {
    return axios.post("https://api.funtranslations.com/translate/dothraki.json?text=" + quote);
  }
};
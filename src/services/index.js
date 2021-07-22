import axios from "axios";
import { shortenText } from "../utils";

const newsService = (feedURL) => {
  return axios
    .get(feedURL)
    .then((response) => {
      const data = response.data.nodes.map((item) => {
        return {
          nid: item.node.nid,
          teaser: shortenText(item.node.clas_teaser, 140),
          color: item.node.color,
          title: shortenText(item.node.title, 80),
          image_url: item.node.image_url,
          image_alt: item.node.image_alt,
          path: item.node.path,
          saf: item.node.field_saf,
          interests: item.node.interests,
        };
      });
      return {
        ourData: data,
        pages: response.data.pager.pages,
        currentPage: response.data.pager.page,
        isLoaded: true,
        callErr: false,
      };
    })
    .catch((error) => {
      console.log({ error });
      // API call error catching
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error({
          isLoaded: true,
          callErr: true,
          errMsg:
            "Server responded with a status code of: " + error.response.status,
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        throw new Error({
          isLoaded: true,
          callErr: true,
          errMsg: "The request was made but no response was received.",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      //display config info for error
      console.log(error.config);
    });
};

export { newsService };

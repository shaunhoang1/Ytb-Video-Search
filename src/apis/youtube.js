import axios from "axios";

const KEY = "AIzaSyCpiT0pCbDrpFMAUOT02xkfeXvawpb1BMU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
    //   q: 'surfboards'
  },
});

import axios from "axios";
const KEY = "";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResoults: 5,
    key: KEY,
  },
});

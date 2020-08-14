import axios from "axios";

const instance = axios.create({
  baseURL: "https://nick-7c53f.firebaseio.com/",
});

export default instance;

import axios from "axios";

// modify setting for production environment
const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export default instance;

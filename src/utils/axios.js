import axios from "axios";

const instance = axios.create({
  baseURL: "https://s56k9hr2fa.execute-api.ap-northeast-2.amazonaws.com/dev",
  // baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

export { instance as axios };

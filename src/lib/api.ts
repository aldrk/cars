import axios from "axios"

const instance = axios.create({
  baseURL: "https://localhost:44355",
  headers: {
    Accept: "application/json",
    charset: "utf-8",
    withCredentials: true
  }
})

export default instance
import axios from "axios"

const instance = axios.create({
  baseURL: "https://localhost:44355",
  headers: {
    Accept: "application/json",
  }
})

export default instance
import axios from "axios"

export default function fetchUser(id) {
  return axios.get(`users/${id}`)
    .then(response => response.data)
}

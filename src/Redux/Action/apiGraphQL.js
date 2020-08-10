import axios from "axios";

const baseUrl = "http://localhost:3000/admin/api";
export const fetchListTests = (query) => {
  return axios.post(baseUrl, {
    query,
  });
};

import axios from "./../../Axios/index";

export const getTag = () => {
  return axios.get("/api/tags");
};
export const getArticles = () => {
  return axios.get("/api/articles", {
    params: {
      limit: 10,
    },
  });
};

export const actionGetArticlesFollowTagName = (tagName) => {
  return axios.get("/api/articles", {
    params: {
      limit: 10,
      tag: tagName,
    },
  });
};
export const actionFetchhUser = (email, password) => {
  return axios.post("/api/users/login", {
    user: {
      email,
      password,
    },
  });
};
export const actionFetchArticleSlug = (endpoint) => {
  let url = "/api/articles/" + endpoint;
  return axios.get(url);
};
export const actionFetchComment = (endpoint) => {
  let url = "/api/articles/" + endpoint + "/comments";
  return axios.get(url);
};

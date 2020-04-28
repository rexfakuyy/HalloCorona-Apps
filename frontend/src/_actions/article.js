import { GET_ARTICLES, GET_ARTICLE } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getArticle = () => {
  return {
    type: GET_ARTICLES,
    async payload() {
      try {
        const articles = await API.get("/article", setAuthToken(localStorage.getItem("token")));
        return articles.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const getArticleId = (id) => {
  return {
    type: GET_ARTICLE,
    async payload() {
      try {
        const article = await API.get(`/article/${id}`);
        return article.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
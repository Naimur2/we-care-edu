import axios from "axios";
import queryString from "query-string";

const baseUrl = process.env.REACT_APP_API_URL;

export const getCategories = async () => {
  const url = `${baseUrl}/video/get-categories`;

  const response = await axios.get(url);

  return response.data;
};

export const getVideos = async (args) => {
  const query = queryString.stringify(args);

  const url = `${baseUrl}/video/get-videos?${query}`;

  const response = await axios.get(url);

  return response.data;
};

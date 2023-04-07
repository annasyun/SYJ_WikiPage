import axios from "axios";

export const getWikiAxios = async () => {
  const response = await axios.get("http://localhost:5000/data");
  return response.data;
};

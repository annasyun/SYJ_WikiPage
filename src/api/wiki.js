import axios from "axios";

export const getWikiAxios = async () => {
  const response = await axios.get("http://localhost:5000/data");
  return response.data;
};

export const updateWikiAxios = async (id, body) => {
  const response = await axios.put(`http://localhost:5000/data/${id}`, body);
  return response.data;
};

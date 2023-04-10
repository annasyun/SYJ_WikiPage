import axios from "axios";

export const getWikiAxios = async () => {
  const response = await axios.get("http://localhost:5000/data");
  return response.data;
};

export const updateWikiAxios = async (id, body) => {
  const response = await axios.put(`http://localhost:5000/data/${id}`, body);
  return response.data;
};

export const postWikiAxios = async (body) => {
  const response = await axios.post("http://localhost:5000/data", body);
  return response.data;
};

export const deleteWikiAxios = async (id) => {
  const response = await axios.delete(`http://localhost:5000/data/${id}`);
  return response.data;
};



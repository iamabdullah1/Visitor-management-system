import axios from "axios";

export const post = async (url, data, headers = {}) => {
  return await axios.post(url, data, headers);
};

export const put = async (url, data, headers = {}) => {
  return await axios.put(url, data, headers);
};

export const get = async (url, headers = {}) => {
  return await axios.get(url, headers);
};

export const deletes = async (url, headers = {}) => {
  return await axios.delete(url, headers);
};

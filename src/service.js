import axios from 'axios';
const request = (URL) => {
  return axios.get(URL);
};

export default request;

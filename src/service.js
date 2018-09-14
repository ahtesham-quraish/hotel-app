import axios from 'axios';
const request =  (URL) => {
  return  axios.get(URL)
    .then(response => response.data.hotels)
    .catch(err => console.log("error happened"))
}

export default request;

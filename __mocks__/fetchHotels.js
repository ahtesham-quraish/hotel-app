// user.js
import request from './request';

const fetchHotelList = () => {
  return request().then(data => data);;
}
export default  fetchHotelList;
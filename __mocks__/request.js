// __mocks__/request.js
import {data} from './data';
  
  const request = () => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () =>
          data
            ? resolve(data)
            : reject({
               error : 'Data does not exist'
              })
      );
    });
  }
  export default request; 
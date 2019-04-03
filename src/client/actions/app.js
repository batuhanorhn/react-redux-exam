import { FETCH_INDEX_DATA_FULLFILLED, FETCH_INDEX_DATA_REJECTED } from '../constants/index';
import axios from 'axios'

 const fullFilledData = (data) => ({
 type: FETCH_INDEX_DATA_FULLFILLED,
 data: data
});


export const getData = () => dispatch => {
 axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
   // console.log(response);
   
   dispatch(fullFilledData(response.data))
  })
}
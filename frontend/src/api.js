import axios from 'axios';

const API_URL ="http://localhost:8080";
export const uploadfile = async (data) => {
 try{
    let response  =  await axios.post(`${API_URL}/upload`,data)
    return response.data;
 } catch(error){
    console.error('Error while calling the api', error.message);
 }
}


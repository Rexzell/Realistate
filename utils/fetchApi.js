import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c9ff0146c7msh20d9c51e038f22fp1cee70jsn93287b7c5c4d'
    },
  });
    
  return data;
}

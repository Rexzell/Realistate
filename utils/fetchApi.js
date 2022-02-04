import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '8b3d5415f3msh7d3d0fd15f6409bp14c4efjsn4a1d4bc67947'
    },
  });
    
  return data;
}
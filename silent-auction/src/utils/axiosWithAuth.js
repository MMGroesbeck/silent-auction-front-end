import axios from 'axios';

export const axiosWithAuth = () => {
  // returns an "instance" of axios, with preconfigured configs
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Authorization': `${token}`
    },
    baseURL: "https://silent-auctions.herokuapp.com/"
  });
};
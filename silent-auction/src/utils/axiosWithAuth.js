import axios from 'axios';

const Auth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://silent-auctions.herokuapp.com", 
        headers: {
            'Authorization': `${token}`,
        },
    });
};

export default Auth;
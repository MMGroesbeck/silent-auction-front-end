import axios from 'axios';

const Auth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: " ", // add base url:<deployedApp.com/api> 
        headers: {
            'Authorization': `${token}`,
        },
    });
};

export default Auth;
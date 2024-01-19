import axios from 'axios';

const CreateAxiosInstance = () => {
  const accessToken = localStorage.getItem('tenantData').token;
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return instance;
};

export default CreateAxiosInstance;

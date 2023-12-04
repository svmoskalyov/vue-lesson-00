import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: "http://apt-booking-api.herokuapp.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = store.state.auth.token;
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Baerer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

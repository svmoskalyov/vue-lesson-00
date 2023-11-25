import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://apt-booking-api.herokuapp.com",
});

export default axiosInstance;

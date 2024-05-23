import axios from "axios";

const axiosNoToken = axios.create({
  baseURL: "http://localhost:5173",
});

const useAxiosPublic = () => {
  return axiosNoToken;
};

export default useAxiosPublic;

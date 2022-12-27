import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosProxy: AxiosInstance = axios.create({
  baseURL: process.env.KORE_AI_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-device-type": "relation",
  },
});

const sendToProxy = (url: string, token: string, message: any) => {
  const convertMsg = JSON.stringify(message);
  const data = axiosProxy.post(url, convertMsg, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export default {
  sendToProxy,
};

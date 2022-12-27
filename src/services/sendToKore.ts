import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosKore: AxiosInstance = axios.create({
  baseURL: process.env.KORE_AI_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const sendToKore = (url: string, token: string, message: any) => {
  const convertMsg = JSON.stringify(message);
  const data = axiosKore.post(url, convertMsg, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;

  //  Promise 코드 입니다
  //   return new Promise((resolve, reject) => {
  //     axiosKore
  //       .post(url, convertMsg, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         resolve(res);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
};

export default {
  sendToKore,
};

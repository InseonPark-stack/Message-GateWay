import dotenv from "dotenv";

dotenv.config();

/*
    SDS 접긑을 위한 환견 변수 undefined 새로운 타입 정의 모듈
*/
const environment = {
  //   privateKey: process.env.PRIVATE_KEY || "",
  //   botId: process.env.BOT_ID || "",
  koreClientSecret: process.env.KORE_AI_CLIENT_SECRET || "",
};

export default environment;

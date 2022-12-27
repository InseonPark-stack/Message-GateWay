import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import environment from "../configs/environment";

dotenv.config();

const getKoreJwtToken = () => {
  try {
    let token: string = jwt.sign(
      {
        sub: "DashboardID",
        iss: process.env.KORE_AI_CLIENT_ID,
        algorithm: "HS256",
      },
      environment.koreClientSecret,
      {
        algorithm: "HS256",
      }
    );
    return token;
  } catch (error) {
    console.log(error);
    return "getJwtTokenError";
  }
};

export default {
  getKoreJwtToken,
};

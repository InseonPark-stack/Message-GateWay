import dotenv from "dotenv";
import { RequestHandler } from "express";

dotenv.config();

class testController {
  constructor() {}

  testMsg: RequestHandler = async (req, res, next) => {
    res.status(200).json({ message: "Test Complete!!" });
  };

  redirectTest: RequestHandler = (req, res, next) => {
    res.redirect(307, "/sync/sendKore");
  };
}

export default new testController();

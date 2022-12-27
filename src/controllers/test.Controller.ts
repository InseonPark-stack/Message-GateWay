import dotenv from "dotenv";
import { RequestHandler } from "express";

dotenv.config();

class testController {
  constructor() {}

  testMsg: RequestHandler = async (req, res, next) => {
    res.status(200).json({ message: "Test Complete!!" });
  };
}

export default new testController();

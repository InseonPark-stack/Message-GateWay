import testController from "../controllers/test.Controller";
import { Router } from "express";

const router = Router();

router.route("/").get(testController.testMsg);

export default router;

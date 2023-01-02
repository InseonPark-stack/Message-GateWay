import testController from "../controllers/test.Controller";
import { Router, RequestHandler } from "express";

const router = Router();

router.route("/").get(testController.testMsg);
router.route("/redirect").post(testController.redirectTest);

export default router;

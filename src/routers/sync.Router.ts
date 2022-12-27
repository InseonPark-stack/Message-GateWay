import { Router } from "express";
import syncController from "../controllers/sync.Controller";

const router = Router();

router.route("/sendKore").post(syncController.callback);

export default router;

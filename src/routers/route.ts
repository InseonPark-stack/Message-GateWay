import { Router } from "express";
import testRouter from "./test.Router";
import syncRouter from "./sync.Router";

const routers = Router();
routers.use("/test", testRouter);
routers.use("/sync", syncRouter);

export default routers;

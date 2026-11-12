import express from "express"
import taskController from "../controller/task.controller.js"

const router = express.Router();

router.get("/", taskController.getTasks);

router.post("/api/tasks", taskController.addTask);

router.use(taskController.errorHandler);

export default router;
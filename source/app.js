import express from "express";
import taskController from "./controller/task.controller.js";
import taskRoutes from "./routes/task.routes.js";


const app = express();

app.use(express.json());
app.use("/api/tasks",taskRoutes);
app.use(taskController.errorHandler);

export default app;
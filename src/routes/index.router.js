import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  taskToggleDone,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", renderTasks);

router.post("/task/add", createTask);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

router.get("/task/:id/toggleDone", taskToggleDone);

export default router;

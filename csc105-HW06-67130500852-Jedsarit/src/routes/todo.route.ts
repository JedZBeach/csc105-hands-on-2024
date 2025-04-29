import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.delete("/", todoController.deleteTodo);
todoRouter.patch("/complete", todoController.completeTodo);
todoRouter.patch("/title", todoController.updateTodo);
todoRouter.get("/user", todoController.getAllTodos);

export { todoRouter };
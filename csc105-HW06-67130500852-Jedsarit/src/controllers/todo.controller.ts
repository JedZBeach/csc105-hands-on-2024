import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const deleteTodo = async (c: Context) => {
    try {
        const query = c.req.query("id");
        if (query !== undefined && query !== null) {
            const data = await todoModel.deleteTodo(parseInt(query));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const completeTodo = async (c: Context) => {
    try {
        const check = c.req.query("id");

        if (check !== undefined && check !== null) {
            const id = parseInt(check);
            const updated = await todoModel.completeTodo(id);
            return c.json({
                success: true,
                data: updated,
                msg: "Do Do Do Do Doneeeeeeeeeeeeeeeeee",
            });
        }
        return c.json(
            {
              success: false,
              data: null,
              msg: "Missing required id field",
            },
            400
          );
    }
    catch (e){
        return c.json(
        {
            success: false,
            data: null,
            msg: `${e}`,
        },
        500
    );
    }
}
const updateTodo = async(c:Context) => {
    try {
        const idQ = c.req.query("id");
        const title  = await c.req.json();
        
        if (idQ !== undefined && idQ !== null && title) {
          const id = parseInt(idQ);
          const data = await todoModel.updateTodo(id, title);
          
          return c.json({
            success: true,
            data: data,
            msg: "Updated Successfully",
          }, 200);
        }
        
        return c.json(
          {
            success: false,
            data: null,
            msg: "Missing required fields",
          },
          400
        );
      } catch (e) {
        return c.json(
          {
            success: false,
            data: null,
            msg: `${e}`,
          },
          500
        );
      }
};
const getAllTodos = async (c: Context) => {
    try {
      const userIdQuery = c.req.query("userId");
      
      if (userIdQuery !== undefined && userIdQuery !== null) {
        const userId = parseInt(userIdQuery);
        const todos = await todoModel.getAllTodos(userId);
        
        return c.json({
          success: true,
          data: todos,
          msg: `Retrieved todos for user ID: ${userId}`,
        }, 200);
      }
      
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    } catch (e) {
      return c.json(
        {
          success: false,
          data: null,
          msg: `${e}`,
        },
        500
      );
    }
  };

export { createTodo , getTodo ,deleteTodo , completeTodo , updateTodo, getAllTodos};
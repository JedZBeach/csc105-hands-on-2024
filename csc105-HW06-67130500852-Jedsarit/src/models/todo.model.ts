import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}
const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}
const completeTodo = async (id: number) => {
    return await db.todo.update({
        where:{
            id: id,
        },
        data: { 
            completed: true,
        },
    })
}
const updateTodo = async (id: number, title: string) => {
    const todo = await db.todo.update({
      where: {
        id: id,
      },
      data: {
        title: title,
      },
    });
    return todo;
};
const getAllTodos = async (userId: number) => {
    const todos = await db.todo.findMany({
      where: {
        userId: userId,
      },
    });
    return todos;
  };

export { createTodo , getTodo , deleteTodo, completeTodo, updateTodo, getAllTodos};


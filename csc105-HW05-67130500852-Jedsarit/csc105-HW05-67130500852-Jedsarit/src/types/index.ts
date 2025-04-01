export type Todo = {
    // Implement HERE
  };
  
  export type CreateTodoInput = {
      title: string;
      completed?: boolean;
  };
  
  export type UpdateTodoInput = {
      title?: string;
      completed?: boolean;
  };
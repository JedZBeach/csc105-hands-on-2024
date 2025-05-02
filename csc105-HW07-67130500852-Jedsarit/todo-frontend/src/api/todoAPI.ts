import { Todo } from '../types/todo';
import { Axios } from '../utils/axiosInstance';

type arrayTodoResponse = {
	success: boolean;
	data: Todo[] | null;
	msg: string;
};

type singleTodoResponse = {
	success: boolean;
	data: Todo | null;
	msg: string;
};

const getTodo = async () => {
	try {
		const response = await Axios.get<arrayTodoResponse>('/todo');
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const addTodo = async (name: string) => {
	try {
		const response = await Axios.post<singleTodoResponse>('/todo', {
			name: name,
		});
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const editNameTodo = async (id: number, name: string) => {
	try {
		const response = await Axios.patch<singleTodoResponse>('/todo', {
			id,
			name,
		});
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const successTodo = async (id: number) => {
	try {
		const response = await Axios.patch<singleTodoResponse>(`/todo/success/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const deleteTodo = async (id: number) => {
	try {
		const response = await Axios.delete<singleTodoResponse>(`/todo/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

export { getTodo, addTodo, editNameTodo, successTodo, deleteTodo };

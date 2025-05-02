import { useState, useEffect } from 'react';
import { Todo } from './types/todo';
import { TodoCard } from './components/todoCard';
import * as todoAPI from './api/todoAPI';

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodoName, setNewName] = useState<string>('');

	async function Add() {
		const resp = await todoAPI.addTodo(newTodoName);
		if (!resp.success) {
			alert(resp.msg);
		}
		FetchTodoData(); //Relaod todo list from backend
		setNewName('');
	}
	async function EditName(id: number, newName: string) {
		const resp = await todoAPI.editNameTodo(id, newName);
		if (!resp.success) {
			alert(resp.msg);
		}
		FetchTodoData();
	}
	async function Success(id: number) {
		const resp = await todoAPI.successTodo(id);
		if (!resp.success) {
			alert(resp.msg);
		}
		FetchTodoData();
	}
	async function Delete(id: number) {
		const resp = await todoAPI.deleteTodo(id);

		if (!resp.success) {
			alert(resp.msg);
		}
		FetchTodoData();
	}

	async function FetchTodoData() {
		const resp = await todoAPI.getTodo();
		if (resp.success && resp.data !== null) {
			setTodos(resp.data);
		}
	}

	useEffect(() => {
		FetchTodoData();
	}, []);

	return (
		<div className='w-screen h-screen bg-no-repeat bg-center bg-blend-color-dodge bg-contain bg-emerald-200  flex items-center justify-center'
		style={{
			backgroundImage: "url('https://media.tenor.com/5lLcKZgmIhgAAAAM/american-psycho-patrick-bateman.gif')",
		  }}>
			<div className='flex flex-col gap-10 text-shadow-white'>
			<h1 className='text-4xl font-bold text-black drop-shadow-md'>G10-Loot Box</h1>
				<div>
					<input
						placeholder='New Todo'
						value={newTodoName}
						onChange={(e) => setNewName(e.target.value)}
					/>
					<button onClick={Add}>Add Todo</button>
				</div>
				{todos.map((todo, index: number) => (
					<TodoCard
						key={index}
						todo={todo}
						handleDelete={Delete}
						handleEdit={EditName}
						handleSuccess={Success}
					/>
				))}
			</div>
		</div>
	);
}

export default App;

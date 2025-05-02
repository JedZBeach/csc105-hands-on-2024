import { FC, useState } from 'react';
import { Todo } from '../types/todo';

type TodoCardProps = {
	todo: Todo;
	handleEdit: (id: number, newName: string) => void;
	handleSuccess: (id: number) => void;
	handleDelete: (id: number) => void;
};

const TodoCard: FC<TodoCardProps> = ({ todo, handleDelete, handleEdit, handleSuccess }) => {
	const [editNewName, setEditNewName] = useState('');
	return (
		<div className='flex gap-10 bg-fuchsia-300/30 backdrop-blur-md rounded-2xl p-10'>
			<h1>{todo.id}</h1>
			<h1>{todo.name}</h1>
			<h1>{todo.success === true ? 'DONE' : 'Not Done'}</h1>
			<div>
				<input
					placeholder='Edit Todo name'
					value={editNewName}
					onChange={(e) => setEditNewName(e.target.value)}
				/>
			</div>
			<button
				onClick={() => {
					handleEdit(todo.id, editNewName);
					setEditNewName('');
				}}
			>
				Edit Name
			</button>
			<button onClick={() => handleSuccess(todo.id)}>Complete</button>
			<button onClick={() => handleDelete(todo.id)}>Delete</button>
		</div>
	);
};

export { TodoCard };

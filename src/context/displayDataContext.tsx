import React, {
	createContext,
	useState,
	FC,
} from "react";

// type TodosContextState = {
// 	todos: string[];
// 	addTodo: (name: string) => void;
// 	coinName: string;
// 	selectCoin: (
// 		event: React.MouseEvent<HTMLButtonElement>
// 	) => void;
// };

// const contextDefaultValues: TodosContextState = {
// 	todos: [],
// 	addTodo: () => {},
// 	coinName: "",
// 	selectCoin: () => {},
// };

// export const TodosContext =
// 	createContext<TodosContextState>(
// 		contextDefaultValues
// 	);

// const TodosProvider: FC = ({ children }) => {
// 	const [todos, setTodos] = useState<string[]>(
// 		contextDefaultValues.todos
// 	);

// 	const [coinName, setCoiname] = useState<string>(
// 		contextDefaultValues.coinName
// 	);

// 	const addTodo = (newTodo: string) =>
// 		setTodos((todos) => [...todos, newTodo]);

// 	const selectCoin = (
// 		event: React.MouseEvent<HTMLButtonElement>
// 	) => {
// 		event.preventDefault();

// 		const button: HTMLButtonElement =
// 			event.currentTarget;
// 		setCoiname(button.name);
// 	};

// 	return (
// 		<TodosContext.Provider
// 			value={{
// 				todos,
// 				addTodo,
// 				coinName,
// 				selectCoin,
// 			}}
// 		>
// 			{children}
// 		</TodosContext.Provider>
// 	);
// };

// export default TodosProvider;

import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

//create Store
const Context = createContext();

// create Provider

export const ContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(null);

    const onAddTodo = (todo) => {
        if (todo.length === 0) return toast.error("Insert a new todo");
        setTodos([...todos, todo]);
        toast.success("Todo added");
    };

    const onDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        toast.success("Todo deleted successfully");
    };
    const onEditTodo = (index) => {
        const findTodo = todos.find((_, i) => i === index);
        setEdit({ index: index, value: findTodo });
    };

    const onEditSubmit = (e) => {
        e.preventDefault();
        const newTodo = e.target.todo.value;
        const updateTodos = todos.map((item, i) => {
            if (i === edit.index) {
                return newTodo;
            } else {
                return item;
            }
        });
        setTodos(updateTodos);
    };
    return (
        <Context.Provider
            value={{
                todos,
                setTodos,
                edit,
                setEdit,
                onAddTodo,
                onDeleteTodo,
                onEditTodo,
                onEditSubmit,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

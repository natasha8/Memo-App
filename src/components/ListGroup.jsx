import React, { useContext } from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Context from "../store/contex";

export default function ListGroup() {
    const { todos, onDeleteTodo, onEditTodo } = useContext(Context);
    return (
        <ol className="list-group list-group-numbered">
            {todos.map((todo, index) => (
                <li
                    key={index}
                    className="list-group-item d-flex justify-content-between"
                >
                    <span className="flex-fill">{todo}</span>

                    <span
                        className="EditItem"
                        onClick={() => onEditTodo(index)}
                    >
                        <RiEdit2Line />
                    </span>
                    <span
                        className="RemoveItem mx-2"
                        onClick={() => onDeleteTodo(index)}
                    >
                        <RiDeleteBin6Line />
                    </span>
                </li>
            ))}
        </ol>
    );
}

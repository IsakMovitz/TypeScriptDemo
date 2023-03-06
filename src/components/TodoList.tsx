import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css"

interface Props{
    savedTodos:Todo[],
    setSavedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC<Props> = ({savedTodos,setSavedTodos}) =>{
    return (
        <div className="todos"> 
            {savedTodos.map(savedTodo => (
                <SingleTodo
                key ={savedTodo.id}
                savedTodo = {savedTodo}
                savedTodos={savedTodos}
                setSavedTodos={setSavedTodos}
                />
            ))}
        </div>
    )
}

export default TodoList
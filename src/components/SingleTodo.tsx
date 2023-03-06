import React from "react";
import {AiFillDelete, } from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import { Todo } from "../model";
import "./styles.css"

interface Props{
    savedTodo:Todo;
    savedTodos:Todo[]
    setSavedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({savedTodo,savedTodos,setSavedTodos}) => {

    
      const handleDelete = (id: number) => {
        setSavedTodos(savedTodos.filter((todo) => todo.id !== id));
      };
    
      const handleDone = (id: number) => {
        console.log(id)
        setSavedTodos(
          savedTodos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
        console.log(id)
        console.log(savedTodo.isDone)
      };

    
    return(
        <form className="todos__single">
            <span className="todos__single--text">
                {savedTodo.todo}
            </span>
            <div>
                <span className="icon" onClick={()=> handleDelete(savedTodo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={()=> handleDone(savedTodo.id)}><MdDone/></span>
            </div>
        </form>
    )

}


export default SingleTodo
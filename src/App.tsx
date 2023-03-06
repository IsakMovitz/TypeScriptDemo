import React, { useState } from 'react';
import { toEditorSettings } from 'typescript';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo} from './model'

// ## any VS unknown ## 
// Good thread: https://stackoverflow.com/questions/51439843/unknown-vs-any
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 

let s1: string = vAny;     // Any is assignable to anything 
//let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

//vAny.method();     // Ok; anything goes with any
//vUnknown.method(); // Not ok; we don't know anything about this variable

// ##################


let name:string;
let age:number| string;   // Typescript union, variable can assume both types
let isStudent: boolean; 
let hobbies:string[];
let role:[number,string]

let printName: (name:string) => void;  // void VS never -->  void returns undefined , never does not return anything instead gives compile time error

// let printName: Function = (name:string) => {
//   console.log(name)
// }

// printName("isak")

// type Person = {
//     name: string;
//     age?: number;
// }
  
interface Person {
  name: string;
  age?: number;
}

interface Guy  extends Person {
  profession:string;
}

let person: Guy={
  name: "isak",
  age:5,
  profession:"worker"
}

let lotsOfPeople: Person[];

// ####################################

const  App: React.FC = () => {      // React functional component , ctrl + space for looking through types
  const [todo,setTodo] = useState<string>("");
  const [savedTodos,setSavedTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setSavedTodos([...savedTodos,{
        id:Date.now(),
        todo:todo,
        isDone:false
      }])
      setTodo("");
    }
  }

  // console.log(todo)
  // console.log(savedTodos)

  return (
    <div className="App">
      <span className = "heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList
      savedTodos={savedTodos}
      setSavedTodos={setSavedTodos}
      />
    </div>
  );
}

export default App;

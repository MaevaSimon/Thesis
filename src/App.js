// App.js
import React, { useState } from 'react';
import './App.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-app">
            <h1>Maëva's To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Voeg een taak toe"
            />
            <button onClick={addTodo}>Toevoegen</button> GEWOON OM TE TESTEN !!
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(index)}>Verwijderen</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
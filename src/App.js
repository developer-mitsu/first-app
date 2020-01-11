import React, { useState } from 'react';

import Form from './Form'
import List from './List'

const App = () => {
    // データはトップレベルのコンポーネントに配置する
    const [todos, setTodos] = useState([
        '宿題をする',
        '洗濯をする',
        '仕事に行く',
        '片付けをする',
        'かあああああ'
    ])

    const addTodo = (value) => {
        const newTodos = [
            ...todos, 
            value
        ]
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const deletedTodos = todos.filter((todo, index) => index !== id)

        setTodos(deletedTodos)
    }

    return (
        <>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App

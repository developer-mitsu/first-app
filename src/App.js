import React, { useState } from 'react'

// yarn add styled-componentsを実行を実行すること
import styled, {createGlobalStyle} from 'styled-components'

import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([
        '宿題をする',
        '洗濯をする'
    ])

    const addTodo = () => {
        const newTodos = [
            ...todos,
            'New Item'
        ]
        setTodos(newTodos)
    }

    return (
        <>
            <GlobalStyle />
            <Title>Todo App</Title>

            <Form addTodo={addTodo} />
            <List todos={todos} />
        </>
    )
}

// htmlタグやbodyタグ、フォントの読み込みなどグローバルに指定したいものを指定
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap');
    body {
        background-color: #000;
    }
    ul {
        padding: 0;
    }
`

// Titleコンポーネントを作る
const Title = styled.h1`
    /* ここにcssが書ける */
    text-align: center;
    color: white;
    font-size: 7em;
    margin-bottom: 0px;
    
    font-family: 'Rubik Mono One', sans-serif;
`

export default App
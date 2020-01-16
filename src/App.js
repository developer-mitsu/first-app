import React from 'react'

// yarn add styled-componentsを実行を実行すること
import styled, {createGlobalStyle} from 'styled-components'

import Form from './Form'
import List from './List'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Title>Todo App</Title>

            <Form />
            <List />
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
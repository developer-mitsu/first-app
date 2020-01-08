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

    return (
        <>
            <Form />
            <List todos={todos} />
        </>
    )
}

export default App

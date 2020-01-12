import React, { useState } from 'react'
import styled from 'styled-components'

const Item = (props) => {
    // const [isDone, setIsDone] = [最新の状態, 値を更新する関数]
    const [isDone, setIsDone] = useState(false)

    return (
        <li>
            <input 
                type="checkbox" 
                // チェックされた際にisDoneをtrueにする
                // チェックが外れた際にisDoneをfalseにする
                onChange={() => {
                    setIsDone(!isDone)
                }} 
            />
            <ContentText
                isDone={isDone}
            // 三項演算子を使用して、isDoneの値によって取り消し線の表示を切り替える
                // style={{textDecoration: isDone ? 'line-through' : 'none'}}
            >{props.content}</ContentText>
        </li>
    )
}

const ContentText = styled.span`
    font-size: 1.5em;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`

export default Item


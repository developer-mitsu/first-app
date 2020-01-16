import React, { useState } from 'react';
import styled from 'styled-components'

const Item = (props) => {
    const [isDone, setIsDone] = useState(false)
    // stateが変更される(setIsDoneが呼び出される)と、Reactはコンポーネントを再描写する

    const desc = 'サンプル'
    const btnStatus = isDone ? '未完了に戻す' : '完了'

    return (
        <ItemWrapper>
            <p>{props.text}</p>
            <button onClick={() => setIsDone(!isDone)}>
                {btnStatus}
            </button>
        </ItemWrapper>
    )
}

const ContentText = styled.span`
    font-size: 1.5em;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`

export default Item
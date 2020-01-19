import React, { useState } from 'react'
import styled from 'styled-components'

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false)

    const handleChange = () => {
        // setIsDoneを実行してisDoneを書き換える
        setIsDone(!isDone)
    }

    return (
        <Wrapper>
            <input type="checkbox" 
                onChange={handleChange}
            />
            <Text isDone={isDone}>{content}</Text>        
        </Wrapper>
    )
}

const Text = styled.span`
    font-size: 2em;
    text-decoration: ${props => props.isDone ? 'line-through': 'none'};
`

const Wrapper = styled.li`
    width: 100%;
    /* height: 50px; */
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px dotted gray;
`

export default Item


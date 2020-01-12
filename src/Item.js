import React from 'react'
import styled from 'styled-components'

const Item = () => {
    return (
        <Wrapper>
            <input type="checkbox" />
            宿題をする
        </Wrapper>
    )
}

const Wrapper = styled.li`
    width: 100%;
    /* height: 50px; */
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 2em;
    box-sizing: border-box;
    border-bottom: 1px dotted gray;
`

export default Item


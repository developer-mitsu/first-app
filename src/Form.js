import React from 'react'
import styled from 'styled-components'

const Form = () => {
    return (
        <Wrapper>
            <input type="text"/>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    width: 500px;
    height: 100px;
    margin: 0 auto;
    input {
        position: relative;
        background-color: #000;
        display: block;
        box-sizing: border-box;
        width: 500px;
        /* margin-top: 50px; */
        padding: 20px;
        border: 1px solid white;
        border-radius: 0px;
        font-size: 25px;
        color: white;
        outline: none;
    }
`

export default Form
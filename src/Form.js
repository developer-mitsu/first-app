import React from 'react';
import styled from 'styled-components'

const Form = () => {
    return (
        <FormWrap>
            <input type="text"/>
            <button type="submit">追加</button>
        </FormWrap>
    )
}

const FormWrap = styled.form`
    /* width: 500px;
    height: 500px;
    background-color: #000;

    input {
        width: 500px;
    } */
`

export default Form
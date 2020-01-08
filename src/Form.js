import React, { useState } from 'react';
import styled from 'styled-components'

const Form = () => {
    // フォームの入力値をstateで管理する
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // デフォルトの挙動をキャンセルする
        e.preventDefault()
        alert(value)
    }

    return (
        <FormWrap onSubmit={handleSubmit}>
            <input 
                type="text"
                // フォームの値が変わるたび(入力が行われるたび)
                // e.target.valueでフォームの入力値を取得し、
                // stateのvalueに設定する
                onChange={(e) => {setValue(e.target.value)}}
            />
            {/* 下のsubmitボタンをクリックすると、
            form要素でsubmitイベントが発生する */}
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
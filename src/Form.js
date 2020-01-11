import React, { useState } from 'react';
import styled from 'styled-components'

const Form = ({addTodo}) => {
    // フォームの入力値をstateで管理する
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // デフォルトの挙動をキャンセルする
        e.preventDefault()

        // 入力されていない際はアラートを出す
        if (!value) {
            alert('入力して下さい。')
            return
        }

        addTodo(value)
        setValue('')
    }

    return (
        <FormWrap onSubmit={handleSubmit}>
            <input 
                type="text"
                // フォームの値が変わるたび(入力が行われるたび)
                // e.target.valueでフォームの入力値を取得し、
                // stateのvalueに設定する

                // 以下フォームstate化二点セット
                onChange={(e) => {setValue(e.target.value)}}
                value={value}
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



// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const result = [...arr1, ...arr2]

// //=> [1, 2, 3, 4, 5, 6]
// useStateを予め読み込んでおく
import React, { useState } from 'react';

// const Item = (props) => {
const Item = ({content, id, deleteTodo}) => {
    // 現在、それぞれのtodoが完了しているのかどうかを管理したい
    // ⇩
    // stateを使用することで実現できる　

    // stateとは？
    // → reactが管理する特別な変数
    // → reactが値を覚えておいてくれる
    // → stateの値が代わると、
    //   reactはもう一度描写される
    //   (下の場合、Item関数がもう一度実行される)

    // React.useState関数を使用すると、
    // 下の2つを要素として持つ配列を返す
    // ・現在の状態(state)
    // ・状態を更新するための関数
    //　また、useStateの引数にはstateの初期値を設定できる
    
    const [isDone, setIsDone] = useState(false)
    const [isEditing, setIsEditing] = useState(false);

    // useState() //=> [現在の状態, 状態を更新する関数]

    // let btnText = isDone ?  '戻す' : '完了！'

    const handleClick = () => {
        // isDone = !isDone (この値の更新法はだめ！)
        setIsDone(!isDone)
    }

    return (
        <li>
            <span>{id + 1}: </span>
            {
                isEditing 
                ? <input type="text" value={content} />
                : <span>{content}</span>
            }
            <button onClick={handleClick}>
                {isDone ?  '戻す' : '完了！'}
            </button>
            {/* イベントハンドラーに引数渡したい際はアロー関数でラップ */}
            <button onClick={() => {deleteTodo(id)}}>削除</button>
            <button onClick={() => {setIsEditing(!isEditing)}}>編集</button>
        </li>
    )
}


export default Item

// [初回実行時]
// 各コンポーネント関数を実行し、描写する内容を決めて、ブラウザに描写する

// [完了ボタンをクリックした際]
// ①完了ボタンがクリックされる
// ②clickイベントが発生する
// ③設定したイベントハンドラーが実行される
// ④stateが書き換わる
// ⑤各コンポーネント関数を実行し、描写する内容を決めて、ブラウザに描写する

// tl;dr
// stateが変わったら、reactが臨機応変に変更してくれる



import React from 'react';

import Item from './Item'

const List = ({todos, deleteTodo}) => {
    return (
        <ul>
            {
                // mapに２つ目の引数を指定すると、
                // 処理中の要素のインデックス番号が取得できる
                todos.map((todo, i) => (
                    <Item 
                        content={todo} 
                        id={i} 
                        key={i}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
            
        </ul>
    )
}

export default List
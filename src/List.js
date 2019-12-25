import React from 'react';

import Item from './Item'

const List = () => {
    return (
        <ul>
            <Item content={'宿題をする'} id={1} />
            <Item content={'洗濯をする'} id={2} />
            <Item content={'仕事に行く'} id={3} />
        </ul>
    )
}

export default List
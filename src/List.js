import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const List = () => {
    return (
        <Wrapper>
            <Item />
            <Item />
            <Item />
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    width: 70vw;
    margin: 0 auto;
`

export default List
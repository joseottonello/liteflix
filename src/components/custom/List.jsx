import styled from 'styled-components'

export default function List({props}) {
    return (
        <Ul>
            <Li>{props}</Li>
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
`

const Li = styled.li`
    cursor: pointer;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 4px;
    color: #999;
`


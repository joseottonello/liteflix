import styled from 'styled-components'
import AddMovie from '../nav/AddMovie'
import { useContext } from 'react'
import MenuContext from '../../context/MenuContext'
import List from './List'

export default function Menu() {
    const { menuState } = useContext(MenuContext)

    return (
        <>
            {
                menuState &&
                <Overlay>
                    <Container>
                        <Content>
                            <List props={"inicio"}></List>
                            <List props={"series"}></List>
                            <List props={"películas"}></List>
                            <List props={"agregadas recientemente"}></List>
                            <List props={"populares"}></List>
                            <List props={"mis peliculas"}></List>
                            <AddMovie/>
                            <List props={"cerrar sesion"}></List>
                        </Content>
                    </Container>
                </Overlay>
            }
        </>
    )
}

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: right;
`
    
const Container = styled.div`
    width: 700px;
    height: 100%;
    position: absolute;
    background: rgba(36, 36, 36, 0.9);
    padding: 20px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8rem 0 0 0;
`
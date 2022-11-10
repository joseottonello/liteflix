import styled from 'styled-components'
import AddMovie from '../components/nav/AddMovie'
import { useContext } from 'react'
import MenuContext from '../context/MenuContext'
import List from './custom/List'

export default function Menu() {
    const { menuState, changeMenuState } = useContext(MenuContext)

    return (
        <>
            {
                menuState &&
                <Overlay>
                    <Container>
                        <Icon 
                        onClick={changeMenuState}
                        whileTap={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 2 }}
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                        </Icon>
                        <Content>
                            <List onClick={changeMenuState} props={"inicio"}></List>
                            <List props={"series"}></List>
                            <List props={"películas"}></List>
                            <List props={"agregadas recientemente"}></List>
                            <List props={"populares"}></List>
                            <List props={"mis peliculas"}></List>
                            <AddMovie />
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

const Icon = styled.div`
    color: #FFF;
    background: red;
`
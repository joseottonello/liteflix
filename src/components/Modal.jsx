import { useContext } from 'react'
import styled from 'styled-components'
import ModalContext from '../context/ModalContext'
import Input from './Input'

export default function Modal({ movies }) {
    const { modalState, changeModalState } = useContext(ModalContext)
    
    return (
        <>
            {
                modalState && 
                <Overlay>
                    <Container>
                        <Close onClick={changeModalState}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Close>
                        <Header>
                            <h1>agregar pelicula</h1>
                        </Header>
                        <AddMovie>
                            <Icon>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                </svg>
                            </Icon>
                            <h1>agregar archivo o arrastrar y soltar</h1>
                        </AddMovie>
                        <Input movies={movies}/>
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
    justify-content: center;
    `
    
const Container = styled.div`
    width: 500px;
    height: auto;
    background: red;
    position: relative;
    background: #242424;
    padding: 20px;
`
    
const Header = styled.div`
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 4px;
        color: #64EEBC;
    }

`

const Close = styled.div`
    top: 10px;
    right: 10px;
    width: 25px;
    color: #fff;
    display: flex;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
`

const AddMovie = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem;
    border: 1px dashed #FFFFFF;
    box-sizing: border-box;

    h1 {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 4px;
        color: #FFFFFF;
    }
`

const Icon = styled.div`
    margin: 1rem;
    width: 20px;
    color:#fff;
`
import { useContext } from 'react'
import ModalContext from '../../context/ModalContext'
import OptionsContext from '../../context/OptionsContext'
import styled from 'styled-components'

export default function Modal() {
    const { modalState, changeModalState, addMovies } = useContext(ModalContext)
    const { select, changeOptionsState } = useContext(OptionsContext)
    console.log(select)

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
                            <AddMovie onClick={changeOptionsState}>
                                <Content>
                                    <Icon>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                        </svg>
                                    </Icon>  
                                        <h1>selecciona una opcion</h1>  
                                </Content>
                            </AddMovie>
                            <Content input>
                                <button type='submit' onClick={addMovies}>subir pelicula</button> 
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
    justify-content: center;

    `
    
    const Container = styled.div`
    @media (max-width: 768px) {
        width: 400px;
    }
    width: 500px;
    height: auto;
    background: red;
    position: relative;
    background: #242424;
    padding: 20px;
    justify-content: center;
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
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    border: 1px dashed #FFFFFF;
    box-sizing: border-box;
`

const Content = styled.div`
    display: flex;
    flex-direction: ${props => props.input ? "column" : "row"};
    justify-content: center;
    align-items: center;

    button {
        margin: 1rem;
        color: #000;
        Width: 248px;
        height: 56px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 400;
        line-height: 22px;
        font-style: normal;
        letter-spacing: 4px;
        box-sizing: border-box;
        transition: ease 2s all;
        font-family: 'Bebas Neue';
        background: #494848;
        border: none;
    }

    h1 {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 4px;
        color: #fff;
    }
`

const Icon = styled.div`
    margin: 1rem;
    width: 20px;
    color:#fff;
`
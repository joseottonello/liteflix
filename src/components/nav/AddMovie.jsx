import { useContext } from 'react'
import styled from 'styled-components'
import ModalContext from '../../context/ModalContext'


export default function AddMovie() {
    const { changeModalState } = useContext(ModalContext)

    return (
        <Btn onClick={changeModalState}>
            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>  
            </Icon>
            <Text> agregar pelicula</Text>
        </Btn>
    )
}

const Btn = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 2rem;
    `  
const Icon = styled.div`
    color: #fff;
    width: 14px;
    padding: 0.5rem;
`
const Text = styled.span`
    text-transform: uppercase;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 4px;
    color: #FFFFFF;
    cursor: pointer;
`

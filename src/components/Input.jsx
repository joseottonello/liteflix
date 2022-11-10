import styled from 'styled-components'

export default function Input({ movies }) {

    return (
        <Container>
            <input type="text" placeholder='titulo' />
            <button onClick={() => console.log(movies)}>subir pelicula</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input {
        margin: 1rem;
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 4px;
        color: #fff;
        background: #242424;
        width: 248px;
        height: 40px;
        border: none;
    }

    button {
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
`


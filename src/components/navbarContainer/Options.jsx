import { useContext } from 'react'
import OptionsContext from '../../context/OptionsContext'
import styled from 'styled-components'

const URLimage = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default function Menu({ movies }) {
    const { optionsState, saveMovie } = useContext(OptionsContext)

    const movieFilter = movies.filter((x) => x.id > 800000)

    return (
        <>
            {
                optionsState &&
                <Overlay>
                    <Container>
                        <Content>
                            {
                                movieFilter.map((movie) => (
                                    <Cont key={movie.id} onClick={() => saveMovie(movie)}>
                                        <Img
                                        src={URLimage(movie.poster_path)} 
                                        alt={movie.title}/>
                                        <span>{movie.title}</span>
                                    </Cont>
                                ))
                            }
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

    @media (max-width: 768px) {
        height: auto;
    }
`
    
const Container = styled.div`
    width: 800px;
    height: auto;
    background: red;
    position: relative;
    background: #242424;
    padding: 20px;
    justify-content: center;
`

const Content = styled.div`
    gap: 0.5rem;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: repeat(auto-fill, max(15rem));
    `

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 20px;
        letter-spacing: 4px;
        color: #fff;
    }
`

const Img = styled.img`
    width: 190px;
    height: 180px;
`
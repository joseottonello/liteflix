import { useContext } from "react"
import { useState } from "react"
import { MenuContext } from '../../context/MenuContext'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Dropdown from '../Dropdown'

const URLimage = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default function PopularMovies({ movies }) {
    const [ dropdown, setDropdown ] = useState(false)
    const { menuState } = useContext(MenuContext)
    const [ state, setState ] = useState(false)

    const populars = movies.filter((movie) => movie.id > 920000);

    return (
        <Container
        initial={{ opacity: 0, y: 0.5 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 2 }}>
            {
                menuState === true
                ? null
                : <Content>
                <Options 
                onClick={() => setDropdown(!dropdown)}>
                    <Text>ver: </Text>
                    <Text title>
                        {state === false ? "populares" : "mis peliculas"}
                    </Text>
                    <Icon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Icon>
                    {
                        dropdown &&
                            <Div>
                                <Dropdown 
                                state={state}
                                setState={setState}/>
                            </Div>
                    }
                </Options>
                <motion.div>
                    {
                        state === false 
                        ?
                        populars.map((movie) => (
                            <Movies 
                            key={movie.id}>
                                <Img src={URLimage(movie.poster_path)} alt={movie.poster_path} />
                            </Movies>
                        ))
                        : null
                    }
                </motion.div>
            </Content>
            }
        </Container>
    )
}

const Container = styled(motion.div)`
    margin: 0 0 0 15rem;

    @media (max-width: 768px) {
        margin: 4rem 0 3rem 0;
        
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
`
    
const Options = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
`

const Text = styled.span`
    display: flex;
    flex-diretion: row;
    align-items: center;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 4px;
    color: ${props => props.title ? "#fff" : "#999"};
`
    
const Icon = styled.div`
    margin-left: ${props => props.check ? "3rem" : null};
    width: 20px;
    color: #fff;
`

const Div = styled.div`
    gap: 1rem;
    margin-top: 0.5rem;
    padding 1.5rem;
    display: flex;
    width: 190px;
    flex-direction: column;
    align-items: flex-start;
    background: #242424;
    position: absolute;
    top: 1.5rem;
`

const Movies = styled.div`
    margin-top: 1rem;
`
const Img = styled.img`
    width: 220px;
    height: 120px;
`


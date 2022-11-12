import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from './nav/NavBar'
import Modal from './custom/Modal'
import Menu from  './custom/Menu'
import FeaturedMovie from './home/FeaturedMovie'
import PopularMovies from './home/PopularMovies'

export default function Container() {
    const [ popular, setPopular ] = useState([])
    const [ featured, setFeatured ] = useState([])


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20")
            .then(responseF => responseF.json())
            .then(infoF => {
                setFeatured(infoF.results)
        })

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20")
            .then(responseP => responseP.json())
            .then(infoP => {
                setPopular(infoP.results)
        })
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout movies={featured}>
            <Modal movies={popular}/>
            <Menu />
            <NavBar 
            movies={popular}/>
            <Home>
                <FeaturedMovie 
                movies={featured}/>
                <PopularMovies 
                movies={popular} />
            </Home>
        </Layout>
    )
}

const Layout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(assets/background.jpg);
    
    @media (max-width: 900px) {
        max-width: 768px;
        max-height: 768px;
        background-position: center;
    }
`
const Home = styled.div`
    margin: 0 5rem 0 5rem;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        margin: 0 1rem 0 1rem;
        flex-direction: column;
        align-items: center;
    }
`
import { motion } from 'framer-motion'
import styled from 'styled-components'
import AddMovie from './AddMovie'
import Icons from './Icons'

export default function NavBar({ movies }) {

    return (
        <Container
        initial={{ opacity: 0, y: 0.5 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}>
            <Section>
                <Title
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}>
                    liteflix
                </Title>
                <Div
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}>
                    <AddMovie 
                    movies={movies}/>
                </Div>
            </Section>
            <Section>
                <Icons 
                movies={movies}/>
            </Section>
        </Container>
    )
}

const Container = styled(motion.div)`
    z-index: 0;
    margin: 0 5rem 0 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Section = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Div = styled(motion.div)`
    @media (max-width: 768px) {
        display: none;
    }
`

const Title = styled(motion.h1)`
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 34px;
    letter-spacing: 4px;
    color: #64EEBC;
    cursor: pointer;
    
    @media (max-width: 768px) {
        position: relative;
        margin-left: 6rem;
    }
`

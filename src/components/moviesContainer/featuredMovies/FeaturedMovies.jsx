import { motion } from 'framer-motion'
import styled from 'styled-components'

export default function FeaturedMovie({ movies }) {
    const featured = movies.filter(x => x.title === "Spider-Man: No Way Home")
    
    return (
        <Container
        initial={{ opacity: 0, y: 0.5 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 2.5 }}>
            {              
                featured.map((movie) => (
                    <motion.div
                    key={movie.id}>
                        <div>
                            <Text> original de </Text>
                            <Text subtitle> liteflix </Text>
                        </div>
                            <Text title>{movie.title}</Text>
                        <motion.div btn
                        initial={{ opacity: 0, y: 0.5 }}
                        animate={{ opacity: 1, x: 1 }}
                        transition={{ duration: 4 }}>
                            <Button>  
                                reproducir 
                            </Button>
                            <Button add>
                                mi lista
                            </Button>
                        </motion.div>
                    </motion.div>
                ))
            }
        </Container>
    )
}

const Container = styled(motion.div)`
    margin: 15rem 5rem 0 0;
    max-width: 60%;
    
    @media (max-width: 768px) {
        margin: 15rem 0 0 0;
    }
`

const Text = styled.span`
    font-weight: 700;
    font-style: normal;
    font-family: 'Bebas Neue';
    text-transform: uppercase;
    color: ${props => props.title ? "#64EEBC" : props.subtitle ? "#fff" : "#999"};
    font-size: ${props => props.title ? "100px" : "20px"};
    line-height: ${props => props.title ? "100px" : "20px"};
    letter-spacing: ${props => props.title ? "16px" : "4px"};
    
    @media (max-width: 768px) {
        font-size: ${props => props.title ? "50px" : "20px"};
        line-height: ${props => props.title ? "40px" : "20px"};
        letter-spacing: ${props => props.title ? "5px" : "4px"};
    }
`

const Button = styled.button`
    color: #fff;
    Width: 248px;
    height: 56px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 400;
    line-height: 22px;
    margin-left: 1rem;
    font-style: normal;
    letter-spacing: 4px;
    box-sizing: border-box;
    transition: ease 2s all;
    font-family: 'Bebas Neue';
    background: ${props => props.add ? "rgba(36, 36, 36, 0.5)" : "#494848"};
    border: ${props => props.add ? "1px solid rgba(255, 255, 255, 0.5)" : "none"};

    &hover {
        color: #000;
    }

    @media (max-width: 768px) {
        margin: 0.5rem;
    }
`
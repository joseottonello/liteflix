import styled from 'styled-components'

export default function Dropdown({ state, setState }) {

    return (
        <>
            {
                state === false ?
                <>
                    <Text title
                    onClick={() => setState(false)}>
                        populares
                        <Icon check>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        </Icon>
                    </Text>
                    <Text onClick={() => setState(true)}>mis peliculas</Text>
                </>
                : <>
                    <Text onClick={() => setState(state === false)}>
                        populares
                    </Text>
                    <Text title>mis peliculas
                        <Icon check>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </Icon>
                    </Text>
                </>
            }
        </>
    )
}

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
    margin-left: ${props => props.check ? "2rem" : null};
    width: 20px;
    color: #fff;
`

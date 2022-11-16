import styled from "styled-components"

const URLimage = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default function MyMovieList({ movies }) {
    return (
        <>
            {
                <Movies >
                    <Img src={URLimage(movies.poster_path)} alt={movies.poster_path} />
                </Movies>
            }
        </>
    )
}

const Movies = styled.div`
    margin-top: 1rem;
`
const Img = styled.img`
    width: 230px;
    height: 170px;
`


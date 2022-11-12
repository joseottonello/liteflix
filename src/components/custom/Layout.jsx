const URLimage = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default function Layout({ movies }) {
    const background = movies.filter(x => x.title === "Black Panther: Wakanda Forever")
    return (
        <>
            {
                background.map((movie) => (
                        <img 
                        alt="asdad"
                        style={{
                            width: "100%", 
                            height: "100%",
                            position: "relative",
                        }}
                        src={URLimage(movie.poster_path)} 
                        />
                ))
            }
        </>
    )
}


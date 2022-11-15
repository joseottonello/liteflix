import { createContext, useState } from "react";

export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
    const [ optionsState, setOptionsState ] = useState(false)
    const [ select, setSelect ] = useState([])

    function changeOptionsState() {
        setOptionsState(!optionsState)
    }

    const saveMovie = (movie) => {  
        localStorage.setItem("movie", JSON.stringify(movie))
        let movieSelect = JSON.parse(localStorage.getItem("movie"))
        setSelect(movieSelect)
        changeOptionsState()
    }
    
    return (
        <OptionsContext.Provider value={{ optionsState, select, changeOptionsState, saveMovie }}>
            {children}
        </OptionsContext.Provider>
    )
}

export default OptionsContext
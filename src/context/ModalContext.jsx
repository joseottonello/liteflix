import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [ modalState, setModalState ] = useState(false)
    const [ movieSelect, setMovieSelect ] = useState([])
    const [state, setState ] = useState(false)

    function changeModalState() {
        setModalState(!modalState)
    }

    const captureEvent = (e) => {
        setMovieSelect(e.target.value)
    }

    const addMovies = () => {
        let selection = []
        selection.push(movieSelect)
        setState(!state)
        console.log(selection)
    }

    const back = () => {
        changeModalState()
        setState(!state)
    }

    return (
        <ModalContext.Provider value={{ back, addMovies, state, setState, movieSelect, captureEvent, modalState, changeModalState }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext
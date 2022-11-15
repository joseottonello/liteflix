import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [ modalState, setModalState ] = useState(false)

    function changeModalState() {
        setModalState(!modalState)
    }


    return (
        <ModalContext.Provider 
        value={{ modalState, changeModalState }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext
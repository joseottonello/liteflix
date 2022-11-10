import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [ menuState, setMenuState ] = useState(false)

    function changeMenuState() {
        setMenuState(!menuState)
    }

    return (
        <MenuContext.Provider value={{ menuState, changeMenuState }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext
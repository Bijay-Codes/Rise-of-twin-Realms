import { AppContext } from "./provider";
import { useRef, useState } from "react";

export function ProvideContext({ children }) {
    const popover = useRef(null);
    const [message, setMessage] = useState('');
    const value = { popover, message, setMessage };
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider >
    )
}
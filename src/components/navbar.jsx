import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/provider"

export function Navbar() {
    const { popover } = useContext(AppContext);
    return (
        <nav className="bg-surface h-16">
            <div className="flex gap-2 h-full items-center px-4">
                {/* <img src="" alt=    "" /> */}
                <span>Twin Realms</span>
                <button className="ml-auto">Download</button>
                <Menu popover={popover} />
            </div>
        </nav>
    )
}


function Menu({ popover }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const target = popover && popover.current;
        if (visible) {
            target && target.show();
        } else {
            target && target.close();
        }
        return () => target && target.close();
    }, [visible, popover])
    return (
        <div onClick={() => setVisible(!visible)} className="w-8 h-8 inline-flex items-center p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </div>
    )
}

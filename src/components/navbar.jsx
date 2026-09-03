import { useState } from "react";

export function Navbar() {
    return (
        <nav className="bg-surface h-16 fixed top-0 w-full z-50">
            <div className="flex gap-2 h-full items-center px-4">
                {/* <img src="" alt=    "" /> */}
                <span>Twin Realms</span>
                <button className="ml-auto">Download</button>
                <Menu />
            </div>
        </nav>
    )
}

function Menu() {
    const [visible, setVisible] = useState(false);
    return (
        <div onClick={() => setVisible(!visible)}
            className="w-8 h-8 inline-flex items-center p-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <div className="absolute top-0 right-0 bg-maroon text-maroon-fg text-xl p-4">
                {visible && <Links setVisible={setVisible} />}
            </div>
        </div>
    )
}
function Links({ setVisible }) {
    return (
        <ul className="flex gap-3 flex-col">
            <button className="w-fit self-end" onClick={() => setVisible(false)}>x</button>
            <ul className="">
                <li>Story</li>
                <li>Playstyles</li>
            </ul>
            <hr className="opacity-50" />
            <ul className="">
                <li>About us</li>
                <li>Staff recruitments</li>
                <li>Feedback</li>
            </ul>
        </ul>
    )
}

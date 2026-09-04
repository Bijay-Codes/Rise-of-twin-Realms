import { useState } from "react";

export function Navbar() {
    return (
        <nav className="bg-surface text-surface-fg w-full px-4 min-h-12
        flex flex-col justify-center">
            <div className="h-full flex justify-start items-center gap-6">
                {/* <img src="" alt=    "" /> */}
                <span className="mr-auto text-xl font-semibold">Twin Realms</span>
                <button>Discord</button>
                <Menu />
            </div>
        </nav>
    )
}

function Menu() {
    const [visible, setVisible] = useState(false);
    return (
        <div onClick={() => setVisible(!visible)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-sec-accent" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <div>
                {visible && <Links setVisible={setVisible} />}
            </div>
        </div>
    )
}
function Links({ setVisible }) {
    return (
        <ul>
            <button onClick={() => setVisible(false)}>x</button>
            <ul>
                <li>Story</li>
                <li>Playstyles</li>
            </ul>
            <hr />
            <ul>
                <li>About us</li>
                <li>Staff recruitments</li>
                <li>Feedback</li>
            </ul>
        </ul>
    )
}

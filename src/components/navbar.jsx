import { useState } from "react";

export function Navbar() {
    return (
        <nav className="bg-surface text-surface-fg border-b border-surface-fg/50
        w-full px-4 min-h-12 sm:min-h-16
        flex flex-col justify-center sticky top-0 z-20">
            <div className="h-full flex justify-start items-center gap-2 relative">
                <figure className="w-8 h-8 aspect-square">
                    <img src="./logo.webp" alt="Rise of twin realms logo" className="w-full h-full object-contain rounded-full" />
                </figure>
                <span className="mr-auto text-xl sm:text-2xl tracking-wide font-semibold">Rise of Twin Realms</span>
                <a href="https://discord.gg/tPXPeu4TW" target="_blank" rel="noopener noreferrer"
                    className="bg-secondary text-secondary-fg py-1 px-2 rounded-full">Discord</a>
                <Menu />
            </div>
        </nav>
    )
}

function Menu() {
    const [visible, setVisible] = useState(false);
    return (
        <div
            onClick={() => setVisible(!visible)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-sec-accent" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <div>
                {visible && <Links setVisible={setVisible} />}
            </div>
        </div>
    )
}
function Links() {
    return (
        <ul
            className="absolute mt-4 right-0
            outline outline-sec-accent/40 bg-surface text-surface-fg
            rounded min-h-16 min-w-40 p-4 text-right
            flex flex-col gap-3 text-lg">
            <ul>
                <li><a href="#lore">Story</a></li>
                <li><a href="#classes">Playstyles</a></li>
            </ul>
            <hr className="opacity-20" />
            <ul>
                <li>About us</li>
                <li>Staff</li>
                <li>Feedback</li>
            </ul>
        </ul>
    )
}

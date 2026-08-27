import { useContext } from "react"
import { AppContext } from "../context/provider"

export function Navbar() {
    const { popover } = useContext(AppContext);
    return (
        <nav className="bg-surface h-16">
            <div className="flex gap-2 h-full items-center px-4">
                {/* <img src="" alt=    "" /> */}
                <span>Twin Realms</span>
                <button className="ml-auto" onClick={() => {
                    popover.current.show()
                }}>Download
                </button>
                <svg viewBox="0 0 100 100" className="bg-accent h-8 w-8">
                    <line
                        stroke="black" strokeWidth='2' strokeLinecap="round"
                        x1={30} y1={10}
                        x2={70} y2={10}
                        fill="black">
                    </line>
                    <line
                        stroke="black" strokeWidth='2' strokeLinecap="round"
                        x1={40} y1={10}
                        x2={60} y2={10}
                        fill="black">
                    </line>
                </svg>
            </div>
        </nav>
    )
}


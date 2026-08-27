import { useContext } from "react"
import { AppContext } from "../context/provider"

export function Popover() {
    const { popover } = useContext(AppContext);
    return (
        <dialog ref={popover} className="w-full h-full bg-transparent z-10" onClick={(e) => {
            if (e.target === popover.current) {
                popover.current.close();
            }
        }}>
            <section className="z-20 bg-surface max-h-60 max-w-40 outline outline-accent text-surface-fg p-4 ml-auto">
                <Links />
            </section>
        </dialog>
    )
}

function Links() {
    return (
        <ul className="flex gap-3 flex-col">
            <ul className="">
                <li>Story</li>
                <li>Playstyles</li>
            </ul>
            <hr className="opacity-25" />
            <ul className="">
                <li>About us</li>
                <li>Staff recruitments</li>
                <li>Feedback</li>
            </ul>
        </ul>
    )
}
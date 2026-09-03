import { useContext } from "react"
import { AppContext } from "../context/provider"

export function Popover() {
    const { popover } = useContext(AppContext);
    return (
        <dialog ref={popover} className="w-full h-full p-2 bg-transparent z-50 focus:outline-none fixed inset-0"
            onClick={(e) => {
                if (e.target === popover.current) {
                    popover.current.close();
                }
            }}>
            <section className="z-50 max-h-60 max-w-40 p-4 ml-auto bg-maroon absolute top-0 right-0">

            </section>
        </dialog>
    )
}


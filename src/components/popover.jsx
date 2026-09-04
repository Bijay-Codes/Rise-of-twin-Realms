import { useContext } from "react"
import { AppContext } from "../context/provider"

export function Popover() {
    const { popover } = useContext(AppContext);
    return (
        <dialog ref={popover}
            onClick={(e) => {
                if (e.target === popover.current) {
                    popover.current.close();
                }
            }}>
            <section>

            </section>
        </dialog>
    )
}


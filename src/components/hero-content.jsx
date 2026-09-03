
export function Hero() {
    return (
        <main className="w-full flex justify-center items-center">
            <section className="grid grid-cols-1 sm:grid-cols-[1fr_auto] justify-center items-center p-6 w-full max-w-360">
                <header className="flex flex-col gap-6">
                    <h1 className="prim-head">Rise of Twin Realms</h1>
                    <h2 className="sec-head max-w-200">Explore the vast world created by twin dragons,
                        channel your strength and bring the balance back among them
                    </h2>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <h3>Active Development in progress</h3>
                    </div>
                    <h4>Become a hero</h4>
                    <CTA />
                </header>
            </section>
        </main>
    )
}

function CTA() {
    const sharedStyles = 'px-6 py-3 rounded'
    return (
        <div className="flex flex-col gap-6 text-xl">
            <span>
                Download the playtest version
                <span className="text-sm px-2">V0.1GD</span>
            </span>

            <button className={` ${sharedStyles} bg-amber-300 text-black w-fit`}>
                Download latest version
            </button>
        </div >
    )
}
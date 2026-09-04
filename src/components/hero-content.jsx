
export function Hero() {
    return (
        <main className="max-w-360">
            <section>
                <header className=" flex flex-col gap-6 sm:gap-12">
                    <h1 className="text-4xl font-extrabold">Rise of Twin Realms</h1>
                    <div className="text-2xl ">
                        <h2 className="max-w-180">Fight Dragons, Restore the balance,</h2>
                        <span>Be the Hero</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1 h-2 bg-emerald-400 animate-pulse" />
                        <h3>Active Development in progress</h3>
                    </div>
                    <CTA />
                </header>
            </section>
        </main>
    )
}

function CTA() {
    return (
        <div className="flex flex-col gap-6 text-xl">
            <span className="text-sm flex flex-col gap-1">
                Download the playtest version
                <span>V0.1GD</span>
            </span>

            <button className="bg-secondary text-secondary-fg w-fit px-4 py-2 rounded">
                Download latest version
            </button>
        </div >
    )
}
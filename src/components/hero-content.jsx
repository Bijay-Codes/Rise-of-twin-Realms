
export default function Hero() {
    return (
        <main className="max-w-360">
            <section>
                <header className="flex flex-col gap-6 sm:gap-12">
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide">Rise of Twin Realms</h1>
                    <div className="text-2xl sm:text-4xl font-bold tracking-tight">
                        <h2 className="max-w-180">Fight Dragons, Restore the balance,</h2>
                        <span>Be the Hero</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                        <h3 className="text-lg sm:text-xl">Active Development in progress</h3>
                    </div>
                    <CTA />
                </header>
            </section>
        </main>
    )
}

function CTA() {
    return (
        <div className="flex flex-col gap-6 text-xl sm:text-2xl">
            <span className="text-sm sm:text-lg flex flex-col gap-1">
                Download the playtest version
                <span>V0.1GD</span>
            </span>

            <a href="https://atom-11.itch.io/rise-of-twin-realm" target="_blank" rel="noopener noreferrer"
                className="bg-secondary text-secondary-fg w-fit px-4 py-2 rounded">
                Download latest version
            </a>
        </div >
    )
}
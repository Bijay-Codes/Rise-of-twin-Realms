export function Hero() {
    return (
        <main className="flex flex-col gap-3 mb-6">
            <span className="text-sm">A Fantasy MMORPG game</span>
            <h1 className="text-6xl">Rise of Twin Realms</h1>
            <div className="text-3xl flex flex-col">
                <span>Two dragons & </span>
                <span>A Broken balance</span>
            </div>
            <h2 className="text-2xl max-w-140">Explore the diffrent realms, fight your foes and bring order. Thats your quest</h2>
            <div className="inline-flex items-center gap-2">
                <span
                    className="h-2 w-2 rounded-full animate-pulse bg-emerald-400" />
                <span className="text-sm">Active development and planning phase</span>
            </div>
            <CTA />
            <span>Current version: 0.01GD</span>
        </main>
    )
}

function CTA() {
    const sharedStyles = 'px-4 py-1 rounded'
    return (
        <div className="flex gap-4">
            <button className={`${sharedStyles} bg-accent`}>
                Join Discord
            </button>
            <button className={`${sharedStyles} bg-maroon`}>
                Download now!
            </button>
        </div >
    )
}
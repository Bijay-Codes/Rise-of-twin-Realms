export function Hero() {
    return (
        <main>
            <span>A Fantasy MMORPG game</span>
            <h1>Rise of Twin Realms</h1>
            <span>Two dragons & </span>
            <span>A Broken balance</span>

            <h2>Explore the diffrent realms, fight your foes and bring order. Thats your quest</h2>
            <span /><span>Active development and planning phase</span>
            <CTA />
            <span>Current version: 0.01GD</span>
        </main>
    )
}

function CTA() {
    return (
        <div>
            <button>
                Join Discord
            </button>
            <button>
                Download now!
            </button>
        </div>
    )
}
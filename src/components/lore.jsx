export default function LoreIntroduction() {
    const loreCards = 'bg-surface text-surface-fg p-4 rounded';
    return (
        <section id="lore" className="flex flex-col gap-12">
            <div>
                <h1 className="text-2xl sm:text-4xl font-semibold tracking-wide">The state of the world</h1>
                <p className="sm:text-lg">The balance of the world depends on your shoulders</p>
            </div>
            <div className="sm:grid grid-cols-2 max-w-360 gap-6">
                <article className={`${loreCards} border-b-2 border-sec-accent/60 sm:border-none`}>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-sec-accent">The Light</h2>
                    <p className="sm:text-lg">
                        One of two dragons shaped by the Creator, both bound to an orb
                        of power. Blinded by greed of power — turned on its
                        twin to seize the other's orb.
                    </p>
                </article>

                <article className={`${loreCards}`}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-accent">The Dark</h2>
                    <p className="sm:text-lg">
                        The other half of the Creator's dragons,
                        Weakened but not broken. What Light could not fully consume
                        still burns within him, unbalanced.
                    </p>
                </article>
                <div className="flex flex-col gap-6 mt-6">
                    <article className="[grid-area:info]">
                        <p className="sm:text-xl">Without both dragons equal, nothing holds. The Realms were built on
                            their balance — and that balance is now broken.</p>
                    </article>

                    <article>
                        <h3 className="text-xl font-semibold">Your role —</h3>
                        <p className="sm:text-xl">
                            So the Creator sends the players — mortal, yet given power neither
                            dragon was born with. Untested. Perhaps the only hope left to set
                            the things right again.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}
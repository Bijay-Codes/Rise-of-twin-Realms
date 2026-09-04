export function LoreIntroduction() {
    const loreCards = 'bg-surface text-surface-fg p-4 rounded';
    return (
        <section id="world" className="flex flex-col gap-12">
            <div>
                <h1 className="text-2xl font-semibold">The state of the world</h1>
                <p>The balance of the world depends on your shoulders</p>
            </div>
            <div className="sm:grid grid-cols-2 max-w-360 gap-6">
                <article className={`${loreCards} border-b-2 sm:border-none`}>
                    <h2 className="text-xl font-bold mb-2">The Light</h2>
                    <p>
                        One of two dragons shaped by the Creator, both bound to an orb
                        of power. Blinded by greed of power — turned on its
                        twin to seize the other's orb.
                    </p>

                </article>

                <article className={`${loreCards}`}>
                    <h2 className="text-xl font-black">The Dark</h2>
                    <p>
                        The other half of the Creator's dragons,
                        Weakened but not broken. What Light could not fully consume
                        still burns within him, unbalanced.
                    </p>
                </article>
                <div className="flex flex-col gap-6  mt-6">
                    <article className="[grid-area:info]">
                        <p>Without both dragons equal, nothing holds. The Realms were built on
                            their balance — and that balance is now broken.</p>
                    </article>

                    <article>
                        <p>
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
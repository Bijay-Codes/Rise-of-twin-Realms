export function LoreIntroduction() {
    const cards = 'text-surface-fg p-6 text-xl opacity-90 border border-slate-700 bg-gray-900 rounded-lg flex flex-col gap-6'
    const heading = 'text-4xl font-extrabold';
    return (
        <section id="world" className="sections max-w-360 flex flex-col gap-12">
            <div>
                <h1 className="sec-head font-extrabold">The state of the world</h1>
                <p className="text-xl">The balance of the world depends on your shoulders</p>
            </div>
            <div className="lore-grid gap-4">
                <article className={`${cards} [grid-area:light]`}>
                    <h2 className={`${heading} text-sec-accent `}>The Light</h2>
                    <p>
                        One of two dragons shaped by the Creator, each bound to an orb
                        of power. Hungered for more than its share — and turned on its
                        twin to seize the other's source.
                    </p>

                </article>

                <article className={`${cards} [grid-area:dark]`}>
                    <h2 className={`${heading} text-accent `}>The Dark</h2>
                    <p>
                        The other of the Creator's dragons, its orb torn at but not
                        undone. Weakened, not broken. What Light could not fully consume
                        still burns, unbalanced, beneath the Realm.
                    </p>
                </article>
                <article className={`${cards} border-t-2 border-slate-500 [grid-area:info]`}>
                    <p>Without both dragons equal, nothing holds. The Realm was built on
                        their balance — and that balance is now broken.</p>
                </article>
            </div>
            <article className={``}>
                <p className="">
                    So the Creator sends the players — mortal, yet given power neither
                    dragon was born with. Untested. Perhaps the only hope left to set
                    the scales right again.
                </p>
            </article>
        </section>
    )
}
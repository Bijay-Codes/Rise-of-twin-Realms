export function CombatSection() {
    const cards = 'bg-surface/60 p-4 rounded-2xl';
    return (
        <section id="classes" className="sections max-w-360 flex flex-col gap-12">
            <div className="sec-head flex flex-col mb-6">
                <span>Pick your class</span>
                <span>Begin your journey</span>
            </div>
            <section className="grid grid-cols-[1fr_auto] gap-6">
                <div>
                    <div className="grid grid-cols-2 gap-2 transition-all duration-500 ease-in-out">
                        <article className={cards}>
                            <h1>Warrior</h1>
                            <p>
                                You're in the thick of it. Close distance fast, take damage, hit back harder.
                                No room to think, just react.
                            </p>
                        </article>
                        <article className={`${cards} w-[90%] m-auto rounded-2xl`}>
                            <h1>Ranged</h1>
                            <p>
                                Distance is the whole strategy. Steady, consistent damage, as long as you
                                never let them close in.
                            </p>
                        </article>
                        <article className={`${cards} w-[90%] m-auto rounded-2xl`}>
                            <h1>Mage</h1>
                            <p>
                                Elemental damage from a distance — but you're fragile. Land your hits before
                                anything reaches you.
                            </p>
                        </article>
                        <article className={cards}>
                            <h1>Summoner</h1>
                            <p>
                                Bring something else into the fight. Let it take the damage while you play the
                                long game.
                            </p>
                        </article>
                    </div>
                </div>
                <div>
                    <div className="bg-accent w-90 h-60 max-h-fit rounded-full"></div>
                </div>
            </section>
        </section >
    )
}
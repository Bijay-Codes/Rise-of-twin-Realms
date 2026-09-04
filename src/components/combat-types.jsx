export function CombatSection() {
    const classes = 'bg-surface text-surface-fg p-4 rounded';
    return (
        <section id="classes" className="flex flex-col gap-12 max-w-360">
            <div className="text-2xl font-extrabold flex flex-col mb-6">
                <span>Pick your class</span>
                <span>Begin your journey</span>
            </div>
            <section className="md:grid md:grid-cols-[1fr_auto] flex flex-col gap-6 items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <article className={classes}>
                        <h1>Warrior</h1>
                        <p>
                            You're in the thick of it. Close distance fast, take damage, hit back harder.
                            No room to think, just react.
                        </p>
                    </article>
                    <article className={classes}>
                        <h1>Ranged</h1>
                        <p>
                            Distance is the whole strategy. Steady, consistent damage, as long as you
                            never let them close in.
                        </p>
                    </article>
                    <article className={classes}>
                        <h1>Mage</h1>
                        <p>
                            Elemental damage from a distance — but you're fragile. Land your hits before
                            anything reaches you.
                        </p>
                    </article>
                    <article className={classes}>
                        <h1>Summoner</h1>
                        <p>
                            Bring something else into the fight. Let it take the damage while you play the
                            long game.
                        </p>
                    </article>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="rotate-24 md:h-full h-20 min-h-40 aspect-square overflow-clip"><desc>
                    {"\n    Question Mark Streamline Icon: https://streamlinehq.com\n  "}
                </desc>
                    <path d="M5 8.5v-1a7 7 0 0 1 14 0 4.83 4.83 0 0 1 -1.414 3.414l-2.414 2.414A4 4 0 0 0 14 16.157v0.343h-4v-1.172c0 -1.81 0.72 -3.547 2 -4.828l1.293 -1.293A2.414 2.414 0 0 0 14 7.5a2 2 0 1 0 -4 0v1H5Z" />
                    <path d="M12 19.5a2 2 0 1 1 0 4 2 2 0 0 1 0 -4Z" />
                </svg>
            </section>
        </section >
    )
}
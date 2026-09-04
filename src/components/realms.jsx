export function Realms() {
    const realms = 'bg-surface text-surface-fg p-4 rounded';
    const realmHeading = 'text-xl font-black mb-2';
    return (
        <section id="realms" className="flex flex-col gap-12 max-w-360">
            <div>
                <h2 className="text-2xl font-extrabold">
                    The Realms
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <article className={realms}>
                    <h3 className={realmHeading}>Origin realm</h3>
                    <p>Where it all began. Before Light turned on Dark, before the balance broke —
                        this is the world as it was meant to be. Villages, open fields, quiet paths between them.
                        It's where every player starts. What happened between the dragons hasn't reached here yet, or maybe
                        it has? No one's said anything. <strong>Yet.</strong></p>
                </article>
                <article className={realms}>
                    <h3 className={realmHeading}>Nightmare realm</h3>
                    <p>Whatever Light became after it won, this is where it lives. Hostile, twisted,
                        shaped by a dragon that got the power it wanted and kept wanting more. This realm isn't hinting
                        at what happened between Light and Dark — it is what happened.</p>
                </article>
                <article className={realms}>
                    <h3 className={realmHeading}>Private realm</h3>
                    <p>Your very own realm, shaped by you. The one realm shaped entirely by you.
                        Bring what you've gathered from the others and make something that's actually yours. Invite your
                        friend's show your vision.</p>
                </article>
                <article className={realms}>
                    <h3 className={realmHeading}>The Universe</h3>
                    <p>The awaited battle, the world deserves to be saved and its gaze is upon you.
                        Would you win? Would the light dragon take over? It depends on you. This is where you get all
                        the answers.</p>
                </article>
            </div>
        </section>
    )
}
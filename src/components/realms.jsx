export function Realms() {
    const cards = 'flex flex-col gap-4 p-4 bg-surface/60';
    const heading = 'text-2xl font-normal';
    return (
        <section id="realms" className="flex flex-col gap-12 max-w-360">
            <div className="sec-head text-right w-full">
                <h2 className="font-extrabold">
                    The Realms
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <article className={cards}>
                    <h3 className={heading}>Origin realm</h3>
                    <p>Where it all began. Before Light turned on Dark, before the balance broke —
                        this is the world as it was meant to be. Villages, open fields, quiet paths between them.
                        It's where every player starts. What happened between the dragons hasn't reached here yet, or maybe
                        it has? No one's said anything. <strong>Yet.</strong></p>
                </article>
                <article className={cards}>
                    <h3 className={heading}>Nightmare realm</h3>
                    <p>Whatever Light became after it won, this is where it lives. Hostile, twisted,
                        shaped by a dragon that got the power it wanted and kept wanting more. This realm isn't hinting
                        at what happened between Light and Dark — it is what happened.</p>
                </article>
                <article className={cards}>
                    <h3 className={heading}>Private realm</h3>
                    <p>Your very own realm, shaped by you. The one realm shaped entirely by you.
                        Bring what you've gathered from the others and make something that's actually yours. Invite your
                        friend's show your vision.</p>
                </article>
                <article className={cards}>
                    <h3 className={heading}>The Universe</h3>
                    <p>The awaited battle, the world deserves to be saved and its gaze is upon you.
                        Would you win? Would the light dragon take over? It depends on you. This is where you get all
                        the answers.</p>
                </article>
            </div>
        </section>
    )
}
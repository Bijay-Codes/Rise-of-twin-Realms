export function Development() {
    const images = 'min-h-60 min-w-120 bg-accent/60';
    return (
        <section className="flex flex-col items-end gap-12">
            <div>
                <h1 className="sec-head text-right font-extrabold">The progress so far</h1>
                <p>Development of Game engine (ATOM 1) and creation of new assets in progress.</p>
            </div>
            <article className="flex overflow-auto justify-end w-full gap-4">
                <div className={images}></div>
                <div className={images}></div>
                <div className={images}></div>
            </article>
            <div className="flex flex-col gap-2 self-start">
                <div>
                    <h2 className="sec-head">We seek your contribution</h2>
                    <span className="text-xl">Development of a game is not an easy task~ Lets combine our efforts to make this project a rality</span>
                </div>
                <div className="flex gap-4 text-xl">
                    <button className="py-2 px-4 bg-accent/40">Join discord</button>
                    <button className="py-2 px-4 bg-sec-accent/40">Apply for staff roles</button>
                </div>
            </div>
        </section>
    )
}
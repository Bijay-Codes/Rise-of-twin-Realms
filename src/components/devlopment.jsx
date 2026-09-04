export function Development() {
    const images = 'bg-surface w-60 h-60'
    return (
        <section className="flex flex-col gap-12 min-w-0">
            <div>
                <h1 className="text-2xl font-extrabold">The progress so far</h1>
                <p>Development of Game engine (ATOM 1) and creation of new assets in progress.</p>
            </div>

            <article className="flex flex-wrap w-full justify-center sm:justify-start gap-6 overflow-auto">
                <div className={images}></div>
                <div className={images}></div>
                <div className={images}></div>
            </article>

            <div className="flex flex-col gap-6 self-start">
                <div>
                    <h2 className="text-2xl font-semibold">We seek your contribution</h2>
                    <span className="">Development of a game is not an easy task~ Lets combine our efforts to make this project a rality</span>
                </div>
                <div className="flex gap-4 text-sm rounded">
                    <button className="py-2 px-4 bg-accent text-accent-fg">Join discord</button>
                    <button className="py-2 px-4 bg-sec-accent text-sec-accent-fg">Apply for staff roles</button>
                </div>
            </div>
        </section>
    )
}
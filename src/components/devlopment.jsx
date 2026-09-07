export default function Development() {
    const images = 'bg-surface/50 w-60 h-60 inline-flex justify-center items-center rounded-lg outline-surface outline  hover:bg-surface hover:outline-surface/50'
    return (
        <section className="flex flex-col gap-12 min-w-0">
            <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide">The progress so far</h1>
                <p className="sm:text-xl">Development of Game engine (ATOM 1) and creation of new assets in progress.</p>
            </div>

            <article className="py-4 flex flex-wrap w-full justify-center sm:justify-start gap-6 overflow-auto">
                <div className={images}>Screenshots soon</div>
                <div className={images}>Screenshots soon</div>
                <div className={images}>Screenshots soon</div>
            </article>

            <div className="flex flex-col gap-6 self-start">
                <div>
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-wide">We seek your contribution</h2>
                    <span className="sm:text-xl">Development of a game is not an easy task~ Lets combine our efforts to make this project a rality</span>
                </div>
                <div className="flex gap-4 text-sm sm:text-lg rounded">
                    <a href="https://discord.gg/tPXPeu4TW" target="_blank" rel="noopener noreferer" className="py-2 px-4 bg-secondary text-secondary-fg uppercase">Join discord</a>
                    <a href="https://forms.gle/PoLZVNri9JgBLd2DA" target="_blank" rel="noopener noreferer" className="py-2 px-4 bg-sec-accent text-sec-accent-fg uppercase">Apply for staff roles</a>
                </div>
            </div>
        </section>
    )
}
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="stripes h-3 w-full" aria-hidden="true" />

      <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Onder constructie
        </p>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Hier wordt
          <br />
          aan gewerkt.
        </h1>

        <p className="mt-6 max-w-md text-lg text-muted">
          Deze site is nog in aanbouw. Kom binnenkort terug, dan staat hier
          het PWS-project.
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">Project</dt>
            <dd className="mt-1">PWS</dd>
          </div>
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="mt-1">In aanbouw</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-muted">Jaar</dt>
            <dd className="mt-1">2026</dd>
          </div>
        </dl>
      </section>

      <footer className="border-t border-line px-6 py-4 font-mono text-xs text-muted">
        PWS-Project
      </footer>
    </main>
  );
}

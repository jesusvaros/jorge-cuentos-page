import { library } from "../app/services";
import { toAssetPath } from "../shared/utils/assetPath";

export function AboutPage() {
  const author = library.author;

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h2 className="font-serif-display text-4xl text-stone-900">Sobre mí</h2>
        <p className="text-stone-700">Mi manera de escribir, editar y convertir ideas en proyectos publicados.</p>
      </section>

      <article className="grid gap-4 rounded-2xl border border-amber-900/20 bg-amber-50/70 p-4 shadow-[0_12px_24px_rgba(54,33,10,0.1)] md:grid-cols-[240px_1fr]">
        <img
          src={toAssetPath(author.portrait)}
          alt={`Retrato de ${author.name}`}
          className="aspect-square w-full rounded-xl border border-amber-900/20 object-cover"
        />
        <div className="space-y-3">
          <h3 className="font-serif-display text-3xl text-stone-900">{author.name}</h3>
          <p className="text-sm text-stone-700">
            {author.role} - {author.location}
          </p>
          <p className="text-stone-800">{author.bio}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {author.links.map((link) => (
              <li key={link.url}>
                <a className="font-semibold text-amber-900 hover:underline" href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <section className="rounded-2xl border border-amber-900/20 bg-amber-50/70 p-4 shadow-[0_12px_24px_rgba(54,33,10,0.1)]">
        <h3 className="font-serif-display text-2xl text-stone-900">Cómo trabajo cada proyecto</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-800">
          {author.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

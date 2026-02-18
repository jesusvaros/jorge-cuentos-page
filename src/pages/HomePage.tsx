import { CollectionPreview } from "../features/home/components/CollectionPreview";
import { storyService } from "../app/services";

export function HomePage() {
  const cuentos = storyService.getFeatured("cuentos", 3);
  const fanzines = storyService.getFeatured("fanzines", 3);

  return (
    <div className="space-y-10">
      <section className="hero-panel">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Narrativa breve y universos alternos</p>
        <h2 className="font-serif-display text-4xl text-stone-900 md:text-5xl">Dos caminos, una voz: cuentos y fanzines</h2>
        <p className="max-w-3xl text-base leading-7 text-stone-700 md:text-lg">
          Esta pagina agrupa la obra del autor en dos colecciones. Cada ficha abre una URL propia para leer el texto
          completo, con portada, tiempo de lectura y precio.
        </p>
      </section>

      <CollectionPreview title="Cuentos" route="/cuentos" stories={cuentos} />
      <CollectionPreview title="Fanzines" route="/fanzines" stories={fanzines} />
    </div>
  );
}

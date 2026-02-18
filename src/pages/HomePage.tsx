import { CollectionPreview } from "../features/home/components/CollectionPreview";
import { storyService } from "../app/services";

export function HomePage() {
  const cuentos = storyService.getFeatured("cuentos", 3);
  const fanzines = storyService.getFeatured("fanzines", 3);
  const carteles = storyService.getFeatured("carteles", 3);
  const proyectos = storyService.getFeatured("proyectos", 3);

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Archivo narrativo y audiovisual</p>
        <h2 className="font-serif-display text-4xl text-stone-900 md:text-5xl">
          Textos, procesos y piezas visuales en una misma bitácora creativa
        </h2>
        <p className="max-w-3xl text-base leading-7 text-stone-700 md:text-lg">
          Aquí conviven ficción breve, fanzines, proyectos en curso y carteles de lanzamiento.
        </p>
      </section>

      <CollectionPreview title="Cuentos" route="/cuentos" stories={cuentos} />
      <CollectionPreview title="Fanzines" route="/fanzines" stories={fanzines} />
      <CollectionPreview title="Carteles" route="/carteles" stories={carteles} />
      <CollectionPreview title="Proyectos activos" route="/proyectos-activos" stories={proyectos} />
    </div>
  );
}

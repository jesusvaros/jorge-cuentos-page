import { Link } from "react-router-dom";
import { Story } from "../../../domain/models/story";
import { collectionPaths } from "../../../domain/types/collection";
import { toAssetPath } from "../../../shared/utils/assetPath";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  const hasOverlay = story.collection !== "carteles" && story.collection !== "fanzines";
  const showPrice = story.collection !== "cuentos";
  const imageAspect = story.collection === "cuentos" ? "aspect-[4/3]" : "aspect-[4/5]";

  return (
    <article className="overflow-hidden rounded-2xl border border-amber-900/20 bg-amber-50/70 shadow-[0_8px_22px_rgba(54,33,10,0.12)] transition hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(54,33,10,0.18)]">
      <Link to={`${collectionPaths[story.collection]}/${story.slug}`} className="block h-full">
        <div className="relative">
          <img
            src={toAssetPath(story.imageCover)}
            alt={`Portada de ${story.name}`}
            loading="lazy"
            className={`${imageAspect} w-full object-cover`}
          />
          {hasOverlay && (
            <h3 className="absolute inset-x-0 bottom-0 m-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent px-3 pb-2 pt-7 font-serif-display text-lg text-white [text-shadow:0_1px_0_rgba(0,0,0,0.8),1px_0_0_rgba(0,0,0,0.75),-1px_0_0_rgba(0,0,0,0.75)]">
              {story.name}
            </h3>
          )}
        </div>

        <div className="space-y-1 p-3">
          {!hasOverlay && <h3 className="font-serif-display text-lg text-stone-900">{story.name}</h3>}
          <p className="text-sm text-stone-700">
            {story.readDuration}
            {showPrice ? ` - ${story.price}` : ""}
          </p>
          <p className="text-sm font-semibold text-amber-800">Leer completo</p>
        </div>
      </Link>
    </article>
  );
}

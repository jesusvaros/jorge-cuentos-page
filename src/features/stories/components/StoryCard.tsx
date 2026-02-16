import { Link } from "react-router-dom";
import { Story } from "../../../domain/models/story";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-amber-900/20 bg-amber-50/70 shadow-[0_8px_22px_rgba(54,33,10,0.12)] transition hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(54,33,10,0.18)]">
      <Link to={`/${story.collection}/${story.slug}`} className="block h-full">
        <img
          src={story.imageCover}
          alt={`Portada de ${story.name}`}
          loading="lazy"
          className="aspect-[5/7] w-full object-cover"
        />
        <div className="space-y-2 p-4">
          <h3 className="font-serif-display text-2xl text-stone-900">{story.name}</h3>
          <p className="text-sm text-stone-700">
            {story.readDuration} - {story.price}
          </p>
          <p className="text-sm font-semibold text-amber-800">Leer completo</p>
        </div>
      </Link>
    </article>
  );
}

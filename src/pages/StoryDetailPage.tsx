import { Link, useParams } from "react-router-dom";
import { collectionLabels, isStoryCollection } from "../domain/types/collection";
import { storyService } from "../app/services";

interface DetailParams {
  collection: string;
  slug: string;
}

export function StoryDetailPage() {
  const { collection, slug } = useParams<DetailParams>();

  if (!isStoryCollection(collection)) {
    return <p className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-900">Coleccion no valida.</p>;
  }

  const story = storyService.getStory(collection, slug);

  if (!story) {
    return <p className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-900">Texto no encontrado.</p>;
  }

  return (
    <article className="space-y-4 rounded-2xl border border-amber-900/20 bg-amber-50/80 p-6 shadow-[0_12px_24px_rgba(54,33,10,0.12)] md:p-8">
      <Link to={`/${collection}`} className="text-sm font-semibold text-amber-800 hover:underline">
        Volver a {collectionLabels[collection]}
      </Link>

      <h2 className="font-serif-display text-4xl text-stone-900">{story.name}</h2>
      <p className="text-stone-700">
        {story.readDuration} - {story.price}
      </p>

      <img src={story.imageCover} alt={`Portada de ${story.name}`} className="w-full max-w-md rounded-xl border border-amber-900/20" />

      <section
        className="prose prose-stone max-w-none prose-headings:font-serif-display prose-headings:text-stone-900"
        dangerouslySetInnerHTML={{ __html: story.richText }}
      />
    </article>
  );
}

import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { StoryCard } from "../features/stories/components/StoryCard";
import { collectionLabels, isStoryCollection } from "../domain/types/collection";
import { storyService } from "../app/services";

interface CollectionParams {
  collection: string;
}

export function CollectionPage() {
  const { collection } = useParams<CollectionParams>();

  const resolvedCollection = useMemo(() => {
    if (!isStoryCollection(collection)) {
      return undefined;
    }

    return collection;
  }, [collection]);

  if (!resolvedCollection) {
    return <p className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-900">Coleccion no valida.</p>;
  }

  const stories = storyService.getCollection(resolvedCollection);

  return (
    <div className="space-y-6">
      <section className="hero-panel">
        <h2 className="font-serif-display text-4xl text-stone-900">{collectionLabels[resolvedCollection]}</h2>
        <p className="text-stone-700">Lista completa. Haz clic en cualquier titulo para lectura completa.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </section>
    </div>
  );
}

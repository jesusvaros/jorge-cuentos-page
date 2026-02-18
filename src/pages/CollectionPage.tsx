import { StoryCollection, collectionLabels } from "../domain/types/collection";
import { StoryCard } from "../features/stories/components/StoryCard";
import { storyService } from "../app/services";

interface CollectionPageProps {
  collection: StoryCollection;
}

export function CollectionPage({ collection }: CollectionPageProps) {
  const stories = storyService.getCollection(collection);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h2 className="font-serif-display text-4xl text-stone-900">{collectionLabels[collection]}</h2>
        <p className="text-stone-700">Lista completa. Haz clic en cualquier título para lectura completa.</p>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </section>
    </div>
  );
}

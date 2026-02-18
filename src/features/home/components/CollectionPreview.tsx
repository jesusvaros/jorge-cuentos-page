import { Link } from "react-router-dom";
import { Story } from "../../../domain/models/story";
import { StoryCard } from "../../stories/components/StoryCard";

interface CollectionPreviewProps {
  title: string;
  route: string;
  stories: Story[];
}

export function CollectionPreview({ title, route, stories }: CollectionPreviewProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-serif-display text-3xl text-stone-900">{title}</h2>
        <Link to={route} className="text-sm font-semibold text-amber-800 hover:underline">
          Ver todos
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </section>
  );
}

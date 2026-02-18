import { StoryRepository } from "../../application/repositories/storyRepository";
import { Story } from "../../domain/models/story";
import { RawLibrary } from "../../domain/types/libraryRaw";
import { StoryCollection, collections } from "../../domain/types/collection";
import { slugify } from "../../shared/utils/slug";

function mapStory(collection: StoryCollection, item: RawLibrary[StoryCollection][number]): Story {
  return {
    slug: slugify(item.name),
    collection,
    name: item.name,
    readDuration: item["duration of read"],
    richText: item.text,
    imageCover: item["image cover"],
    price: item.price,
  };
}

export class JsonStoryRepository implements StoryRepository {
  private readonly stories: Record<StoryCollection, Story[]>;

  constructor(rawLibrary: RawLibrary) {
    this.stories = {
      cuentos: rawLibrary.cuentos.map((item) => mapStory("cuentos", item)),
      fanzines: rawLibrary.fanzines.map((item) => mapStory("fanzines", item)),
      carteles: rawLibrary.carteles.map((item) => mapStory("carteles", item)),
      proyectos: rawLibrary.proyectos.map((item) => mapStory("proyectos", item)),
    };

    // Assert mapper consistency early so data errors fail fast.
    collections.forEach((collection) => {
      if (!Array.isArray(this.stories[collection])) {
        throw new Error(`Collection ${collection} is invalid.`);
      }
    });
  }

  getStoriesByCollection(collection: StoryCollection): Story[] {
    return this.stories[collection];
  }

  getStoryBySlug(collection: StoryCollection, slug: string): Story | undefined {
    return this.stories[collection].find((item) => item.slug === slug);
  }
}

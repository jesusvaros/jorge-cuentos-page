import { Story } from "../../domain/models/story";
import { StoryCollection } from "../../domain/types/collection";

export interface StoryRepository {
  getStoriesByCollection(collection: StoryCollection): Story[];
  getStoryBySlug(collection: StoryCollection, slug: string): Story | undefined;
}

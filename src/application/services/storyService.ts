import { StoryRepository } from "../repositories/storyRepository";
import { Story } from "../../domain/models/story";
import { StoryCollection } from "../../domain/types/collection";

export class StoryService {
  constructor(private readonly repository: StoryRepository) {}

  getCollection(collection: StoryCollection): Story[] {
    return this.repository.getStoriesByCollection(collection);
  }

  getFeatured(collection: StoryCollection, limit: number): Story[] {
    return this.repository.getStoriesByCollection(collection).slice(0, limit);
  }

  getStory(collection: StoryCollection, slug: string): Story | undefined {
    return this.repository.getStoryBySlug(collection, slug);
  }
}

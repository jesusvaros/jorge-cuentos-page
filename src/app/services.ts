import libraryRaw from "../data/library.json";
import { StoryService } from "../application/services/storyService";
import { JsonStoryRepository } from "../infrastructure/repositories/jsonStoryRepository";
import { RawLibrary } from "../domain/types/libraryRaw";

const repository = new JsonStoryRepository(libraryRaw as RawLibrary);

export const storyService = new StoryService(repository);

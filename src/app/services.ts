import libraryRaw from "../data/library.json";
import { StoryService } from "../application/services/storyService";
import { JsonStoryRepository } from "../infrastructure/repositories/jsonStoryRepository";
import { RawLibrary } from "../domain/types/libraryRaw";

export const library = libraryRaw as RawLibrary;

const repository = new JsonStoryRepository(library);

export const storyService = new StoryService(repository);

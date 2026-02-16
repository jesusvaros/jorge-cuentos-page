import { StoryCollection } from "./collection";

export interface RawStory {
  name: string;
  "duration of read": string;
  text: string;
  "image cover": string;
  price: string;
}

export type RawLibrary = Record<StoryCollection, RawStory[]>;

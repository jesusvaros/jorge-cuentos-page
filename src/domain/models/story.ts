import { StoryCollection } from "../types/collection";

export interface Story {
  slug: string;
  collection: StoryCollection;
  name: string;
  readDuration: string;
  richText: string;
  imageCover: string;
  price: string;
}

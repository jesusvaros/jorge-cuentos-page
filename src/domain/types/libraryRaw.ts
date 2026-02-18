import { StoryCollection } from "./collection";

export interface RawStory {
  name: string;
  "duration of read": string;
  text: string;
  "image cover": string;
  price: string;
}

export interface RawAuthorLink {
  label: string;
  url: string;
}

export interface RawAuthor {
  name: string;
  role: string;
  location: string;
  bio: string;
  portrait: string;
  links: RawAuthorLink[];
  highlights: string[];
}

export interface RawLibrary {
  author: RawAuthor;
  cuentos: RawStory[];
  fanzines: RawStory[];
  carteles: RawStory[];
  proyectos: RawStory[];
}

export type RawStoryCollectionMap = Record<StoryCollection, RawStory[]>;

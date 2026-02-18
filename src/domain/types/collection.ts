export const collections = ["cuentos", "fanzines"] as const;

export type StoryCollection = (typeof collections)[number];

export const collectionLabels: Record<StoryCollection, string> = {
  cuentos: "Cuentos",
  fanzines: "Fanzines",
};

export function isStoryCollection(value: string): value is StoryCollection {
  return collections.includes(value as StoryCollection);
}

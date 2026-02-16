export const collections = ["cuentos", "fancines"] as const;

export type StoryCollection = (typeof collections)[number];

export const collectionLabels: Record<StoryCollection, string> = {
  cuentos: "Cuentos",
  fancines: "Fanfics",
};

export function isStoryCollection(value: string): value is StoryCollection {
  return collections.includes(value as StoryCollection);
}

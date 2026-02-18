export const collections = ["cuentos", "fanzines", "carteles", "proyectos"] as const;

export type StoryCollection = (typeof collections)[number];

export const collectionLabels: Record<StoryCollection, string> = {
  cuentos: "Cuentos",
  fanzines: "Fanzines",
  carteles: "Carteles",
  proyectos: "Proyectos activos",
};

export const collectionPaths: Record<StoryCollection, string> = {
  cuentos: "/cuentos",
  fanzines: "/fanzines",
  carteles: "/carteles",
  proyectos: "/proyectos-activos",
};

export function isStoryCollection(value: string): value is StoryCollection {
  return collections.includes(value as StoryCollection);
}

const DATA_URL = "data/library.json";

const COLLECTION_CONFIG = {
  cuentos: {
    label: "Cuentos",
    page: "cuentos.html",
    cta: "Leer completo",
  },
  fancines: {
    label: "Fanfics",
    page: "fancines.html",
    cta: "Leer completo",
  },
  proyectos: {
    label: "Proyectos activos",
    page: "proyectos-activos.html",
    cta: "Ver proyecto",
  },
  carteles: {
    label: "Carteles",
    page: "carteles.html",
    cta: "Ver detalle",
  },
};

export async function loadLibrary() {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(`No se pudo leer ${DATA_URL}`);
  }

  return response.json();
}

export function getCollectionLabel(collection) {
  return COLLECTION_CONFIG[collection]?.label || "Coleccion";
}

export function getCollectionPage(collection) {
  return COLLECTION_CONFIG[collection]?.page || "index.html";
}

export function getCollectionCta(collection) {
  return COLLECTION_CONFIG[collection]?.cta || "Ver detalle";
}

export function getReadDuration(item) {
  return item["duration of read"] || item.timeline || item.format || "Sin duracion";
}

export function getSecondaryMeta(item) {
  return item.price || item.status || item.audience || "Sin precio";
}

export function getItemMeta(item) {
  return `${getReadDuration(item)} - ${getSecondaryMeta(item)}`;
}

export function getCoverImage(item) {
  return item["image cover"] || "assets/ui/placeholder.svg";
}

export function createItemCard(item, collection, index) {
  const article = document.createElement("article");
  article.className = "story-card";

  const link = document.createElement("a");
  link.href = `detail.html?type=${collection}&id=${index}`;
  link.className = "card-link";
  link.setAttribute("aria-label", `Abrir ${item.name}`);

  const cover = document.createElement("img");
  cover.src = getCoverImage(item);
  cover.alt = `Portada de ${item.name}`;
  cover.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card-body";

  const name = document.createElement("h4");
  name.textContent = item.name;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = getItemMeta(item);

  const cta = document.createElement("span");
  cta.className = "cta";
  cta.textContent = getCollectionCta(collection);

  body.append(name, meta, cta);
  link.append(cover, body);
  article.append(link);

  return article;
}

export function renderError(container, message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}

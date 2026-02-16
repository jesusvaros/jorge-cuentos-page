const DATA_URL = "data/library.json";
const CONTACT_URL = "data/contact-detail.json";
let contactDetailsCache = null;

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

export async function loadContactDetails() {
  if (contactDetailsCache) {
    return contactDetailsCache;
  }

  const response = await fetch(CONTACT_URL);

  if (!response.ok) {
    throw new Error(`No se pudo leer ${CONTACT_URL}`);
  }

  contactDetailsCache = await response.json();
  return contactDetailsCache;
}

export async function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");

  if (!footer) {
    return;
  }

  try {
    const details = await loadContactDetails();
    const pageLinks = details.pages || [];
    const socialLinks = details.social || [];
    const email = details.email || {};
    const legal = details.legal || {};

    const pagesHtml = pageLinks
      .map((page) => `<li><a href="${page.href}">${page.label}</a></li>`)
      .join("");

    const socialHtml = socialLinks
      .map(
        (social) => `
          <li>
            <a class="social-link" href="${social.href}" target="_blank" rel="noreferrer" aria-label="${social.label}">
              <img src="${social.icon}" alt="" />
              <span>${social.label}</span>
            </a>
          </li>
        `,
      )
      .join("");

    footer.innerHTML = `
      <div class="footer-grid">
        <section>
          <p class="footer-title">Navegacion</p>
          <ul class="footer-links">${pagesHtml}</ul>
        </section>
        <section>
          <p class="footer-title">Redes</p>
          <ul class="footer-social">${socialHtml}</ul>
        </section>
        <section>
          <p class="footer-title">Contacto</p>
          <a class="footer-email" href="${email.href || "#"}">${email.label || "Email no disponible"}</a>
          <p class="footer-legal">${legal.copyright || ""}</p>
        </section>
      </div>
    `;
  } catch (error) {
    footer.innerHTML = "<p>No se pudo cargar el footer de contacto.</p>";
    console.error(error);
  }
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

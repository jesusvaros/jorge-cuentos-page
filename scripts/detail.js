import {
  getCollectionPage,
  getCollectionLabel,
  getCoverImage,
  getItemMeta,
  loadLibrary,
  renderError,
  renderFooter,
} from "./common.js";

const detailRoot = document.getElementById("detail-root");
const collectionTitle = document.getElementById("detail-collection-title");

function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    type: params.get("type"),
    id: Number(params.get("id")),
  };
}

async function renderDetail() {
  if (!detailRoot || !collectionTitle) {
    return;
  }

  const { type, id } = getParams();

  if (!type || Number.isNaN(id)) {
    renderError(detailRoot, "La URL no contiene parametros validos.");
    return;
  }

  try {
    const data = await loadLibrary();
    const collection = data[type] || [];
    const item = collection[id];

    if (!item) {
      renderError(detailRoot, "No se encontro el texto solicitado.");
      return;
    }

    collectionTitle.textContent = getCollectionLabel(type);

    const backHref = getCollectionPage(type);

    detailRoot.innerHTML = `
      <a class="back-link" href="${backHref}">Volver a ${getCollectionLabel(type)}</a>
      <h2>${item.name}</h2>
      <p class="meta">${getItemMeta(type, item)}</p>
      <img class="detail-cover" src="${getCoverImage(item)}" alt="Portada de ${item.name}" onerror="this.onerror=null;this.src='assets/ui/placeholder.svg';" />
      <section class="rich-text">${item.text}</section>
    `;
  } catch (error) {
    renderError(detailRoot, "No se pudo cargar esta obra.");
    console.error(error);
  }
}

renderDetail();
renderFooter();

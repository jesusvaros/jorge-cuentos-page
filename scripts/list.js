import { createItemCard, getCollectionLabel, loadLibrary, renderError, renderFooter } from "./common.js";

const root = document.getElementById("list-root");
const collection = document.body.dataset.collection;

async function renderList() {
  if (!root || !collection) {
    return;
  }

  try {
    const data = await loadLibrary();
    const items = data[collection] || [];

    if (items.length === 0) {
      renderError(root, `No hay obras cargadas en ${getCollectionLabel(collection)}.`);
      return;
    }

    items.forEach((item, index) => {
      root.append(createItemCard(item, collection, index));
    });
  } catch (error) {
    renderError(root, "No se pudo cargar la coleccion.");
    console.error(error);
  }
}

renderList();
renderFooter();

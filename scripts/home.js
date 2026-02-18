import { createItemCard, getCollectionLabel, getCollectionPage, loadLibrary, renderError, renderFooter } from "./common.js";

const previews = [
  { key: "cuentos", root: document.getElementById("cuentos-preview"), link: document.getElementById("cuentos-link") },
  { key: "fanzines", root: document.getElementById("fanzines-preview"), link: document.getElementById("fanzines-link") },
  { key: "carteles", root: document.getElementById("carteles-preview"), link: document.getElementById("carteles-link") },
  { key: "proyectos", root: document.getElementById("proyectos-preview"), link: document.getElementById("proyectos-link") },
];

async function renderHome() {
  try {
    const data = await loadLibrary();

    previews.forEach(({ key, root, link }) => {
      if (!root) return;

      if (link) {
        link.textContent = `Ver todos los ${getCollectionLabel(key).toLowerCase()}`;
        link.href = getCollectionPage(key);
      }

      (data[key] || []).slice(0, 3).forEach((item, index) => {
        root.append(createItemCard(item, key, index));
      });
    });
  } catch (error) {
    previews.forEach(({ root, key }) => {
      if (root) {
        renderError(root, `No se pudo cargar la vista previa de ${getCollectionLabel(key).toLowerCase()}.`);
      }
    });
    console.error(error);
  }
}

renderHome();
renderFooter();

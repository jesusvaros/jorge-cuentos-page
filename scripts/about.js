import { loadLibrary, renderError } from "./common.js";

const root = document.getElementById("about-root");

function createLinks(links) {
  if (!Array.isArray(links) || links.length === 0) {
    return "";
  }

  return `
    <ul class="inline-links">
      ${links
        .map((link) => `<li><a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a></li>`)
        .join("")}
    </ul>
  `;
}

function createHighlights(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <ul class="highlight-list">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

async function renderAbout() {
  if (!root) {
    return;
  }

  try {
    const data = await loadLibrary();
    const author = data.author;

    if (!author) {
      renderError(root, "No hay datos del autor en el JSON.");
      return;
    }

    root.innerHTML = `
      <article class="about-card">
        <img class="about-photo" src="${author.portrait}" alt="Foto de ${author.name}" />
        <div>
          <h2>${author.name}</h2>
          <p class="meta">${author.role} - ${author.location}</p>
          <p>${author.bio}</p>
          ${createLinks(author.links)}
        </div>
      </article>

      <section class="about-extra">
        <h3>Resumen profesional</h3>
        ${createHighlights(author.highlights)}
      </section>
    `;
  } catch (error) {
    renderError(root, "No se pudo cargar la informacion del autor.");
    console.error(error);
  }
}

renderAbout();

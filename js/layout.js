const LOGO = `
<a class="logo" href="index.html" aria-label="BCP">
  <svg viewBox="0 0 92 42" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="34" height="34" rx="6" fill="#f37021"/>
    <text x="19" y="27" text-anchor="middle" fill="#fff" font-size="16" font-family="Poppins,Arial" font-weight="800">BCP</text>
    <text x="42" y="18" fill="#0b1f3a" font-size="8" font-family="Poppins,Arial" font-weight="700">Banco de</text>
    <text x="42" y="28" fill="#0b1f3a" font-size="8" font-family="Poppins,Arial" font-weight="700">Crédito del Perú</text>
  </svg>
</a>`;

function headerHTML(active) {
  return `
  <div class="disclaimer">Sitio demostrativo no oficial. No pertenece a Banco de Crédito del Perú ni a Credicorp. Solo con fines educativos / de portafolio.</div>
  <header class="topbar">
    <div class="container">
      <div class="topbar-row">
        ${LOGO}
        <nav class="seg" aria-label="Segmentos">
          <a href="index.html" class="${active === "personas" ? "active" : ""}">Personas</a>
          <a href="pymes.html" class="${active === "pymes" ? "active" : ""}">Pymes</a>
          <a href="empresas.html" class="${active === "empresas" ? "active" : ""}">Empresas</a>
        </nav>
        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">☰</button>
        <div class="top-actions">
          <button class="search-btn" id="openSearch" type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>
            Buscar
          </button>
          <a class="btn btn-orange" href="#" id="bancaBtn">Banca por Internet</a>
        </div>
      </div>
      <nav class="nav" id="mainNav">
        <details>
          <summary>Productos</summary>
          <div class="menu">
            <a href="ahorros.html">Cuentas de ahorro</a>
            <a href="tarjetas.html">Tarjetas débito y crédito</a>
            <a href="hipotecario.html">Crédito hipotecario</a>
            <a href="vehicular.html">Crédito vehicular</a>
            <a href="prestamo.html">Préstamo personal</a>
            <a href="inversiones.html">Inversiones</a>
            <a href="seguros.html">Seguros</a>
          </div>
        </details>
        <details>
          <summary>Soluciones Digitales</summary>
          <div class="menu">
            <a href="cobros.html">Soluciones de cobro</a>
            <a href="pymes.html">Herramientas Pyme</a>
            <a href="empresas.html">Banca corporativa</a>
            <a href="ahorros.html">Apertura digital</a>
          </div>
        </details>
        <details>
          <summary>Beneficios</summary>
          <div class="menu">
            <a href="tarjetas.html">Millas Benefit</a>
            <a href="tarjetas.html">Cashback</a>
            <a href="seguros.html">Protección de tarjetas</a>
          </div>
        </details>
        <details>
          <summary>Ayuda y Educación</summary>
          <div class="menu">
            <a href="index.html#ayuda">Ir a ayuda rápida</a>
            <a href="hipotecario.html">Simular crédito</a>
            <a href="inversiones.html">Aprende a invertir</a>
          </div>
        </details>
      </nav>
    </div>
  </header>
  <div class="search-modal" id="searchModal">
    <form id="searchForm">
      <input name="q" placeholder="¿Qué estás buscando?" required>
      <button class="btn btn-orange" type="submit">Buscar</button>
    </form>
  </div>
  <div class="toast" id="toast"></div>`;
}

function footerHTML() {
  return `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        ${LOGO}
        <p style="margin-top:10px;max-width:280px">Banca digital de demostración inspirada en un mockup de banca personal. Contenido ilustrativo.</p>
      </div>
      <div>
        <h4>Productos</h4>
        <a href="ahorros.html">Ahorros</a>
        <a href="tarjetas.html">Tarjetas</a>
        <a href="hipotecario.html">Hipotecario</a>
        <a href="vehicular.html">Vehicular</a>
      </div>
      <div>
        <h4>Servicios</h4>
        <a href="pymes.html">Pymes</a>
        <a href="cobros.html">Cobros</a>
        <a href="empresas.html">Empresas</a>
        <a href="index.html#ayuda">Ayuda</a>
      </div>
      <div>
        <h4>Contacto</h4>
        <a href="#">Centro de ayuda</a>
        <a href="#">Ubica tu agencia</a>
        <a href="#">Libro de reclamaciones</a>
      </div>
    </div>
    <div class="container copy">© ${new Date().getFullYear()} Demo BCP Personas. Proyecto de portafolio. Marcas y nombres son de sus respectivos dueños.</div>
  </footer>`;
}

document.getElementById("app-header").innerHTML = headerHTML(document.body.dataset.segment || "personas");
document.getElementById("app-footer").innerHTML = footerHTML();

const nav = document.getElementById("mainNav");
document.getElementById("menuToggle").addEventListener("click", () => nav.classList.toggle("open"));

const modal = document.getElementById("searchModal");
document.getElementById("openSearch").addEventListener("click", () => modal.classList.add("open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(() => (el.style.display = "none"), 2800);
}

document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("open");
  toast("Mostrando resultados ilustrativos para tu búsqueda.");
});

document.getElementById("bancaBtn").addEventListener("click", (e) => {
  e.preventDefault();
  toast("Esta es una demo. La banca por internet no está conectada.");
});

window.showToast = toast;

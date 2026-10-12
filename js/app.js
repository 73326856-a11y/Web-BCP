function money(n) {
  return "S/ " + n.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const savingsForm = document.getElementById("savingsForm");
if (savingsForm) {
  const calc = () => {
    const saldo = Number(document.getElementById("saldo").value);
    const meses = Number(document.getElementById("plazo").value);
    const tasa = 0.037;
    const interes = saldo * (tasa * (meses / 12));
    document.getElementById("interesEst").textContent = money(interes);
    document.getElementById("tasaAnual").textContent = "Tasa anual: 3.70%";
  };
  savingsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calc();
    showToast("Interés estimado actualizado.");
  });
  document.getElementById("plazoRange").addEventListener("input", (e) => {
    document.getElementById("plazo").value = e.target.value;
  });
  calc();
}

const preForm = document.getElementById("preForm");
if (preForm) {
  preForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const doc = document.getElementById("ruc").value.trim();
    if (doc.length < 8) {
      showToast("Ingresa un número de documento válido.");
      return;
    }
    showToast("En una evaluación real se consultarían productos preaprobados.");
  });
}

document.querySelectorAll("[data-alert]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showToast(btn.dataset.alert);
  });
});

const loanRange = document.getElementById("loanRange");
if (loanRange) {
  const montoEl = document.getElementById("loanAmount");
  const updateLoan = () => {
    const monto = Number(loanRange.value);
    montoEl.textContent = monto.toLocaleString("es-PE");
    const meses = Number(document.querySelector(".term.active")?.dataset.meses || 24);
    const cuota = (monto * 0.018) / (1 - Math.pow(1 + 0.018, -meses)) ;
    document.getElementById("loanQuota").textContent = money(cuota);
  };
  loanRange.addEventListener("input", updateLoan);
  document.querySelectorAll(".term").forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".term").forEach((t) => t.classList.remove("active"));
      el.classList.add("active");
      updateLoan();
    });
  });
  updateLoan();
}

const vehiForm = document.getElementById("vehiForm");
if (vehiForm) {
  vehiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(document.getElementById("valorAuto").value);
    const inicialPct = Number(document.getElementById("inicial").value) || 20;
    const meses = Number(document.getElementById("plazoAuto").value);
    const financiar = valor * (1 - inicialPct / 100);
    const cuota = (financiar * 0.016) / (1 - Math.pow(1 + 0.016, -meses));
    document.getElementById("cuotaAuto").textContent = money(cuota);
  });
}

const invForm = document.getElementById("invForm");
if (invForm) {
  const run = () => {
    const monto = Number(document.getElementById("montoInv").value);
    const dias = Number(document.querySelector(".days button.active").dataset.dias);
    const tasa = 0.052;
    const ganados = monto * tasa * (dias / 360);
    document.getElementById("intGan").textContent = money(ganados);
    document.getElementById("montoTot").textContent = money(monto + ganados);
  };
  document.getElementById("montoInv").addEventListener("input", run);
  document.querySelectorAll(".days button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".days button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      run();
    });
  });
  run();
}

const solForm = document.getElementById("solForm");
if (solForm) {
  solForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Solicitud de evaluación enviada (demo).");
  });
}

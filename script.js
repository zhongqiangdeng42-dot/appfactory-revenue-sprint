const form = document.querySelector("#auditForm");
const statusEl = document.querySelector("#formStatus");

function buildBrief(data) {
  return [
    "AppFactory Revenue Sprint audit brief",
    "",
    `Business/app: ${data.get("business")}`,
    `Stage: ${data.get("stage")}`,
    `Contact: ${data.get("contact")}`,
    "",
    "Seven-day outcome:",
    data.get("goal"),
    "",
    "Recommended first transaction: $500 paid diagnostic.",
    "Operating note: count revenue only after cash is received or an invoice is payable."
  ].join("\n");
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const brief = buildBrief(data);

  try {
    await navigator.clipboard.writeText(brief);
    statusEl.textContent = "Audit brief copied. Paste it into email, DM, or CRM.";
  } catch {
    const encoded = encodeURIComponent(brief);
    window.location.href = `mailto:?subject=AppFactory%20Revenue%20Sprint%20audit%20brief&body=${encoded}`;
    statusEl.textContent = "Email draft opened with the audit brief.";
  }
});

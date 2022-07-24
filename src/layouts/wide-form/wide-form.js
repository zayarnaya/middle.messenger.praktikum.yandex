export function layout_wideForm() {
  document.querySelector(".messenger-wrapper").textContent = "";
  document.querySelector(".messenger-wrapper").classList.remove("width-340");
  document
    .querySelector(".messenger-wrapper")
    .append(document.createElement("div"));
  document
    .querySelector("div")
    .classList.add("wrapper-all-center", "no-border", "width-510");
}

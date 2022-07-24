export function layout_narrowForm() {
  document.querySelector(".messenger-wrapper").textContent = "";
  document.querySelector(".messenger-wrapper").classList.remove("width-510", "no-border")
  document
    .querySelector(".messenger-wrapper")
    .append(document.createElement("div"));
  document
    .querySelector("div")
    .classList.add(
      "wrapper-all-center",
      "width-340",
      "form-wrapper"
    );
}

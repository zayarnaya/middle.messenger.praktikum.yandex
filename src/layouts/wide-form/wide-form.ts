import wideForm from "./wide-form.hbs";
import "./wide-form.scss";

export function layoutWideForm() {
  document.querySelector(".messenger-wrapper").innerHTML = wideForm();

  document
    .getElementById("link-to-chats")
    .addEventListener("click", function () {
      document.location.hash = "#chats";
    });
}

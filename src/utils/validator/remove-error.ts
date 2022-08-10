export function removeError(message: HTMLElement) {
  message.textContent = "";
  message.classList.toggle("active");
}

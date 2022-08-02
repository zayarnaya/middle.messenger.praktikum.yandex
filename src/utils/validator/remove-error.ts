export function removeError(message: HTMLElement) {//мессчадж это што?
  message.textContent = "";
  message.classList.toggle("active");
}

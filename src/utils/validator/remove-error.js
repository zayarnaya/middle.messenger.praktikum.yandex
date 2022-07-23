export function removeError(message) {
    message.textContent = '';
    message.classList.toggle('active');
}
export function checkPassMatch(
  input: HTMLInputElement,
  inputCheck: HTMLInputElement
): boolean {
  if (input.value == inputCheck.value) {
    return true;
  } else if (input.value != inputCheck.value) {
    return false;
  }
}

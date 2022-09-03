import { Block } from "./block";

export function render(query: string, block: any) {
  const root: HTMLElement = document.querySelector(query) as HTMLElement;
  root.textContent = "";

  root.appendChild(block.getContent());
  block.dispatchComponentDidMount();

  return root;
}

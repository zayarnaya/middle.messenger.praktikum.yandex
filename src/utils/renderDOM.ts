export function render(query: string, block) {
  const root = document.querySelector(query);
  root.textContent = "";

  root.appendChild(block.getContent());
  block.dispatchComponentDidMount();

  return root;
}

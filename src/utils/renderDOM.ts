export function render(query: string, block) {
  //console.log(query, block, "RENDER ARGS");
  const root: HTMLElement = document.querySelector(query) as HTMLElement;
  root.textContent = "";

  root.appendChild(block.getContent());
  block.dispatchComponentDidMount();

  return root;
}

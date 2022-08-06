export function render(query: string, block) {
    const root = document.querySelector(query);
    root.textContent = "";
  
      // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());
  
      block.dispatchComponentDidMount();
  
    return root;
  } 

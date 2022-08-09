export function render(query: string, block) {
    const root = document.querySelector(query);
    root.textContent = "";

      // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());
  console.log(typeof block, "ТИП БЛОКА В РЕНДЕРЕ В СТРАНИЦУ");
      block.dispatchComponentDidMount();
  
    return root;
  } 

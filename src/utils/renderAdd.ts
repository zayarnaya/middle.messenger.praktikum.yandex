export function renderAdd(query: string, block: any) {
    const root: HTMLElement = document.querySelector(query) as HTMLElement;
    //root.appendChild(block.getContent());
    console.log(block.getContent());
    root.append(block.getContent());
    block.dispatchComponentDidMount();
  
    //return root;
  }
  
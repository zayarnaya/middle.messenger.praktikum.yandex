export function seekAttributes(element: Object) { 

    if(!element || element == null) {
        return; 
    }
    let field = document.querySelector(`#${element[0]}`);
    if(!field || field == null) {
        return; 
    }
    let theList = element[1].attributes;
    
    if (!theList) {
        return;

    };

    Object.keys(theList).forEach(elem => field.setAttribute(elem, theList[elem]));
}

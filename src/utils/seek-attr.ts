export function seekAttributes(element: Object) { 
//шо такое элемент?
    if(!element || element == null) {
        return; //не знаю тут ошибку надо или что?
    }
    let field = document.querySelector(`#${element[0]}`);
    if(!field || field == null) {
        return; //тут то же самое, но эта штука хотя бы заткнулась
    }
    let theList = element[1].attributes;
    
    if (!theList) {
        return;

    } /*else if (Object.keys(theList).includes("pattern")) {
        field.setAttribute("pattern", theList.pattern);

    } else if (Object.keys(theList).includes("maxLength")) {
        field.setAttribute("maxLength", theList.maxLength);
    }*/;

    Object.keys(theList).forEach(elem => field.setAttribute(elem, theList[elem]));
}

export function seekAttributes(element) {
    let field = document.querySelector(`#${element[0]}`);
    let theList = element[1].attributes;

    if (!theList) {
        return;

    } else if (Object.keys(theList).includes("pattern")) {
        field.setAttribute("pattern", theList.pattern);

    } else if (Object.keys(theList).includes("maxLength")) {
        field.setAttribute("maxLength", theList.maxLength);
    };
}

import { getData } from "./get-data";

export function addSubmitListener() { document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    getData();
  });
}

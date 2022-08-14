export function getData(): void {
  let inputs: HTMLInputElement[] = Array.from(
    document.getElementsByTagName("input")
  );
  let vals = [];
  let keys = [];
  let result: Record<string | number, any> = {};

  inputs.forEach((element) => {
    vals.push(element.value);
    keys.push(element.name);
  });

  for (let i = 0; i < vals.length; i++) {
    result[keys[i]] = vals[i];
  }

  console.log(result);

  setTimeout(function () {
    switch (location.hash) {
      case "#login":
        location.hash = "#chats";
        break;
      case "#signin":
        location.hash = "#login";
        break;
      case "#changepass":
        location.hash = "#myprofile";
        break;
      case "#forgotpass":
        location.hash = "#login";
        break;
      default:
        location.hash = "#chats";
        break;
    }
  }, 3000);
}

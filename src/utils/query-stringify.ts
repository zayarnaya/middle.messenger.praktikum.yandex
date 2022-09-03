export function queryStringify(data: object) {
  if (typeof data !== "object") {
    throw new Error("На входе должен быть объект");
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
  
}

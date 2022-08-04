export function queryStringify(data) {
    if (typeof data !== 'object') {
            throw new Error('На входе должен быть объект');
    }
    let flatData = [];  
let theString = "";

for(let key in data) {
    let val = data[key];
    let arr = "";
    arr += key.toString();
    arr += '=';
    arr += val.toString();
    flatData.push(arr);
    }
let thenewString = "";
   for (let item of flatData) {
        thenewString += "&";
        thenewString += item;
   }
   theString = "?" + thenewString.slice(1);
   return theString;
  
}

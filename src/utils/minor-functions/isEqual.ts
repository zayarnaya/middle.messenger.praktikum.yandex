const isObject = (item: any): boolean => {
    return (item && typeof item === 'object' && !Array.isArray(item));
  };

export function isEqual(a: Record<string, any>, b: Record<string, any>): boolean {

  let akeys: Array<string> = Object.keys(a);
  let bkeys: string[] = Object.keys(b);

  if(akeys.length != bkeys.length) return false;
  
  for (let i = 0; i < akeys.length; i++) {
    let key: string | number = akeys[i];
    if(!bkeys.includes(key)) return false;

    if(typeof a[key] != typeof b[key]) return false;

    if(!!isObject(a[key])) {
      if(!isEqual(a[key], b[key])) return false;
    } else if (a[key] != b[key]) {
        return false; 
      } 
    }
  
   return true
  
}

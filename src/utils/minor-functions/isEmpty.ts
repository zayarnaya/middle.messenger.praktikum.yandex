export function isEmpty(data: any): boolean {
    if(data instanceof Array) {
        if(data.length === 0) {
            return true;
        } else if (data.length != 0) {
            return false;
        }
    } else if (data instanceof Object) {
        console.log("ISEMOTY _____ OBJECT");
        if(Object.keys(data).length === 0) {
            console.log("NE KEYS");
            return true;
        } else if (data == null) {
            console.log("DATA NULL");
            return true;
        
        } else if (Object.keys(data).length != 0 && data != undefined && data != null) {
            return false;
        }
    } else if (typeof data == "string" && data.length == 0) {
        return true;
    } else if (typeof data == "number" && data === 0) {
        return true;
    } else if (data == undefined) {
        return true;
    } else if (data == null) {
        return true;
    }
    
    return false;

}

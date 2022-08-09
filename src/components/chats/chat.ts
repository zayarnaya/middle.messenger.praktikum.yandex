import { Block } from "../../utils/block";

export class Chat extends Block {
    constructor(tag: string, props, classname?: string) {
        super(tag, props, false, classname);
        this.props = props;
    }

    /*
    render(){
        return this.compile
    } 
    */
    
}

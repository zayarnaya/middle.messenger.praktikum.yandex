import Handlebars from "handlebars";
import multiList from "./multi-list.hbs";
import { Block } from "../../utils/block";

export class MultiList extends Block {
    constructor(children: Object, tag: string, classname: string) {
        super(tag, children, false, classname);
    }

    render() {
        console.log(this.children);
        let vals = [];
        Object.values(this.children).forEach(child => {
            vals.push(child._id);
        });

        return this.compile(Handlebars.compile(multiList({vals: vals})), this.props);
    }
}

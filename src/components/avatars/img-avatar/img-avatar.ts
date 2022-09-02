import { Block } from "../../../utils/block";
import imageAvatar from "./img-avatar.hbs";

type ImageAvatarProps = {
    avatar: string,
    name: string
}

export class ImageAvatar extends Block<ImageAvatar> {
    public constructor(props: ImageAvatarProps) {
        super("div", props, false, "profile__avatar");
    }

    public render() {
        return this.compile(imageAvatar, this.props);
    }
}

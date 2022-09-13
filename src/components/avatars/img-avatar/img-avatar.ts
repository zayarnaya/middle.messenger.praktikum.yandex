import { Block } from "../../../utils/block";
import imageAvatar from "./img-avatar.hbs";
import "./img-avatar.scss";

type ImageAvatarProps = {
    avatar: string,
    name: string,
    text?: string
}

export class ImageAvatar extends Block<ImageAvatar> {
    public constructor(props: ImageAvatarProps) {
        super("div", props, false, "profile__avatar");
        this.events = {
            click: () => {
                const hiddenInput: HTMLElement = document.getElementById("changeAvatarHiddenInput") as HTMLElement;
                hiddenInput.classList.toggle("hidden");
            }

        }

        this.eventTarget = ".profile__change-avatar";
    }

    public render() {
        return this.compile(imageAvatar, this.props);
    }
}

import store, { StoreEvents } from "./store";
import { Indexed } from "../types";
import { isEqual } from "./minor-functions/isEqual";
import { Block } from "./block";

type ComponentProps = any;

class Component extends Block<ComponentProps, Component> {
  public constructor(...args: any[]) {
    super("div", args);

    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps({ ...store.getState() });
    });
  }
}

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  // используем class expression
  return class extends Component {
    constructor(props) {
      let state = mapStateToProps(store.getState());
      super({ ...props, ...state });

      // подписываемся на событие
      store.on(StoreEvents.Updated, () => {
        // при обновлении получаем новое состояние
        const newState = mapStateToProps(store.getState());

        // если что-то из используемых данных поменялось, обновляем компонент
        if (!isEqual(state, newState)) {
          this.setProps({ ...newState });
        }

        // не забываем сохранить новое состояние
        state = newState;
      });
    }
  };
}

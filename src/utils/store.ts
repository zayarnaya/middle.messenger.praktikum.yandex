import { set } from './minor-functions/set';
import { Indexed } from '../types';
import { EventBus } from './event-bus';


export enum StoreEvents {
    Updated = 'updated',
}

class Store extends EventBus {
    private state: Indexed = {};
      
    public getState() {
      return this.state;
    }
  
    public set(path: string, value: unknown) {
      set(this.state, path, value);
      this.emit(StoreEvents.Updated); 
    }

    public clear() {
      this.state = {};
    }
} 

export default new Store(); 

///////////////////////
/*
  const state = {};

set(state, 'user.name', 'John'); 
console.log(state); // { user: { name: 'John' } } 


///////

export enum StoreEvents {
    Updated = 'updated',
  }
  
  // наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
  class Store extends EventBus {
      ...
  
    public set(path: string, value: unknown) {
      set(this.state, path, value);
  
          // метод EventBus
          this.emit(StoreEvents.Updated);
    };
  }
  
  export default new Store();


import { EventBus } from './event-bus';
/////
  import store, { StoreEvents } from './store';

class UserProfile extends Block {
  constructor(...args) {
    super(...args);

        // запрашиваем данные у контроллера
        UserController.getUser();

        // подписываемся на событие
    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
        });
  }

  render() {
    // внутри рендер в this.props будут достпны данные из хранилища
  }
}


///
class UserController {
    public getUser() {
      UserAPI.getUser()
               .then(data => store.set('user', data);
    }
  }


  //////

  function connect(Component: typeof Block) {
    // используем class expression
  return class extends Component {
    constructor(...args) {
            // не забываем передать все аргументы конструктора
      super(...args);

      // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // вызываем обновление компонента, передав данные из хранилища
          this.setProps({...store.getState()});
            });
    }
  } 
}


//////////

// UserProfile.ts
export connect(UserProfile);

// AccountPage.ts
const userProfile = new UserProfile();
 /////////


 function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
    // используем class expression
  return class extends Component {
    constructor(props) {
      super({...props, ...mapStateToProps(store.getState())});

      // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // вызываем обновление компонента, передав данные из хранилища
          this.setProps({...mapStateToProps(store.getState())});
            });
    }
  } 
}

function mapUserToProps(state) {
  return {
    name: state.user.name,
    avatar: state.user.avatar,
  };
}

connect(UserProfile, mapUserToProps); 

////////

function connect(mapStateToProps: (state: Indexed) => Indexed) {
    return function(Component: typeof Block) {
      return class extends Component {
        ...
      }
      }
  }
  
  const withUser = connect(state => ({ user: state.user }));
  
  withUser(UserProfile);
  withUser(SettingsPage);


////// сравнение что изменилось

const newState = mapStateToProps(state);
    
if (!isEqual(oldState, newState)) {
  // обновляем компонент
}
 

///////////

function connect(mapStateToProps: (state: Indexed) => Indexed) {
    return function(Component: typeof Block) {
      return class extends Component {
        constructor(props) {
                  // сохраняем начальное состояние
                  let state = mapStateToProps(store.getState());
  
            super({...props, ...state});
  
            // подписываемся на событие
              store.on(StoreEvents.Updated, () => {
                      // при обновлении получаем новое состояние
                      const newState = mapStateToProps(store.getState());
                
                      // если что-то из используемых данных поменялось, обновляем компонент
                      if (!isEqual(state, newState)) {
                    this.setProps({...newState});
                      }
  
                      // не забываем сохранить новое состояние
                      state = newState;
                  });
          }
      }
      }
  }
  

  ///////////

  class UserAPI extends BaseAPI {
    create() {
        return api.post('/', {})
            // И то, только в случае, если уверены в результате,
            // иначе контроллер проверит все сам дальше
            .then({user: {info}} => info);
    }
} 

/////
class LoginAPI extends BaseAPI {
    public request(user: LoginRequest) {
      return authAPIInstance.post<LoginRequest, LoginResponse>('/login', user)
        .then(({user_id}) => user_id); // Обрабатываем получение данных из сервиса далее
    }
  } */

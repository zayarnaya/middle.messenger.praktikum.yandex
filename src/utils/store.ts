import { set } from './minor-functions/set';
import { PlainObject } from '../types';
import { EventBus } from './event-bus';


export enum StoreEvents {
    Updated = 'updated',
}

class Store extends EventBus {
    private state: PlainObject = {};
      
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


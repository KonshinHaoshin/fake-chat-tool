import mitt, { Emitter } from 'mitt';

interface Events {
  sentChat: void;
  [key: string]: any;
}

const eventBus: Emitter<Events> = mitt<Events>();

export default eventBus; 
import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

eventEmitter.on('dog', () => {
    console.log('Woooof');
});

eventEmitter.on('cat', () => {
    console.log('Meooow');
});

eventEmitter.emit('dog');
eventEmitter.emit('cat');

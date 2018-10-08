import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9090');

export function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export default {};
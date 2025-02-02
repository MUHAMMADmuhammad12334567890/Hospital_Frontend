import {io} from 'socket.io-client';

const options = {
  "force new connection": true,
  reconnectionAttempts: "Infinity", // avoid having user reconnect manually in order to prevent dead clients after a server restart
  timeout : 100000, // before connect_error and connect_timeout are emitted.
  transports : ["websocket"]
}

const socket = io(options, {  
  cors: {
  origin: "http://localhost:3001",
  credentials: true
},transports : ['websocket'] });

//const socket = io("/", options);

export default socket;
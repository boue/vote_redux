import Server from 'socket.io';

export default function startServer(){
  const io = new Server().attach(8090);

  //subscribe a listener to the store that reads current state
  //turn it into plain JS object and emits it as a state event on socket server
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  //listen to 'connection' events on socket server (get one each time client connects)
  //clients can immediately receive state when they connect and sync client-side state to 
  //latest server state right away
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    //client emit 'action' events that we feed directly into our Redux Storellll
    socket.on('action', store.dispatch.bind(store));
  });

  // A client sends an action to the server.
  // The server hands the action to the Redux Store.
  // The Store calls the reducer and the reducer executes the logic related to the action.
  // The Store updates its state based on the return value of the reducer.
  // The Store executes the listener function subscribed by the server.
  // The server emits a 'state' event.
  // All connected clients - including the one that initiated the original action - receive the new state.
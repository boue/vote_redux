//store holds current state, and can receive actions that evolve the state from one version 
//to the next 

import { createStore } from 'redux';
import reducer from './reducer';

export default function makeStore(){
  return createStore(reducer);
}
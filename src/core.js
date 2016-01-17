import {List} from 'immutable';

//Sets an entries key in the state Map, and set the value as the given List entries
export function setEntries(state, entries){
  return state.set('entries', List(entries));
}
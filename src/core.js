import {List, Map} from 'immutable';

//Sets an entries key in the state Map, and set the value as the given List entries
export function setEntries(state, entries){
  return state.set('entries', List(entries));
}

export function next(state){
  //.get Returns the value associated with the provided key
  const entries = state.get('entries');
  return state.merge({
    //takes first two
    vote: Map({pair: entries.take(2)}),
    //returns entries but by skipping first two
    entries: entries.skip(2)
  });
}
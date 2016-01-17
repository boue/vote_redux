import {List, Map} from 'immutable';

//Sets an entries key in the state Map, and set the value as the given List entries
export function setEntries(state, entries){
  return state.set('entries', List(entries));
}

export function next(state){
  //.get Returns the value associated with the provided key
  const entries = state.get('entries').concat(getWinners(state.get('vote')));
  if (entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winnder', entries.first());
  } else {
  return state.merge({
      //takes first two
      vote: Map({pair: entries.take(2)}),
      //returns entries but by skipping first two
      entries: entries.skip(2)
    });
  }
}

export function vote(state, entry){
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
}

function getWinners(vote){
  if(!vote) return [];
  const [a,b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if (aVotes > bVotes) return [a];
  else if (aVotes < bVotes) return [b];
  else return [a,b];
}


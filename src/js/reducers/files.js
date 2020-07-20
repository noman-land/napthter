//import ActionTypes from '../actions/actionTypes';

import { List } from 'immutable';
import FileEgg from '../data/FileEgg';

const defaultData = List([
  1,
  2,
  3,
  [4, 5, 6, [7, 8, 9, [1, 2, 3, [4, 5, 6, [7, 8, 9]]]]]
]);

const makeEggs = eggs =>
  eggs.map(egg =>
    typeof egg === 'number' ? FileEgg.fromJS({ preview: egg }) : makeEggs(egg)
  );

export default (state = makeEggs(defaultData), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

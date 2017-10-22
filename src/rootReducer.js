import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import dummie from './modules/dummie';

const rootReducer = combineReducers({
  [dummie.constants.NAME]: dummie.reducer,
  form: formReducer,
});

export default rootReducer;

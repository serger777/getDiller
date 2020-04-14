import { combineReducers } from 'redux';

import carReducer from "./carReducer";


const reducers = combineReducers({
	car: carReducer,
});

export default reducers;

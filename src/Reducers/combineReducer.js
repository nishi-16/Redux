import {combineReducers} from 'redux';
import dataReducer from '../Data/dataStore';

const allReducers = combineReducers({
    order:dataReducer
});



export default allReducers;
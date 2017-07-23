import {combineReducers} from 'redux';
import CharacterCreation from './CharacterReducer';
import Roll from './RollReducer';

const reducers = combineReducers({
    CharacterCreation,
    Roll
});

export default reducers;

import {combineReducers} from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './heroes';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
});
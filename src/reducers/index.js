import { combineReducers } from 'redux';
import BooksReduce from './reducer_books';

const rootReducer = combineReducers({
  books: booksReducer
});

export default rootReducer;

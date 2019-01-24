import {combineReducers} from 'redux'
import todos from './todo/reducers/todos';
import visibilityFilter from './todo/reducers/visibilityFilter';
import Counter from './counter/reducer';
import {selectedReddit,postsByReddit} from './async/reducers';
const TestApp = combineReducers({
    todos,
    visibilityFilter,
    Counter,
    selectedReddit,
    postsByReddit

});
export default TestApp
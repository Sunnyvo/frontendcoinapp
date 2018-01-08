
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import PlatformReducer from './reducers/reducer-platforms'
import ActivePlatformReducer from './reducers/reducer-active-platform'


const middleware = applyMiddleware(
  logger,
);

const reducers = combineReducers({
  platforms: PlatformReducer,
  activePlatform: ActivePlatformReducer,
})


export default createStore(reducers, middleware);



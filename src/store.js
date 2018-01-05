
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import PlatformReducer from './reducers/reducer-platforms'

const ActionPlatformReducer = (state = {visible: false, platform: null}, action) => {
  switch(action.type) {
    case 'VISIBLE_PENDING':
      return {visible: false,  platform: null};
    case 'VISIBLE_ACCEPTED':
      return {visible: true, platform: action.platformLoading};
    default:
      return state;
  }
}

// const requestPrice = (state = { request: false}, action) => {

//   switch(action.type) {
//     case "REQUEST_PENDING":
//       return {request: true }
//     case "REQUEST_DONE":
//     return {request: true, platform:}
//   }


// }
const middleware = applyMiddleware(
  logger,
);

const reducers = combineReducers({
  platforms: PlatformReducer,
  ActionPlatformReducer,
})


export default createStore(reducers, middleware);



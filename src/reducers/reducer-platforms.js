import data from '../default.json';

export default function (state = data,action){
  // console.log('Hello:',action.type)
  switch(action.type){
    case "UPDATE_PRICE":
      return action.payload
    default :
      return state
  }
}

export default function (state=null,action){
  switch (action.type){
    case "PLATFORM_SELECTED" :
      return action.payload;
    default :
      return state

    }

}
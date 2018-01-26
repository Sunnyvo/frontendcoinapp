export const  selectPlatform = (platform) => {

  return {
    type: "PLATFORM_SELECTED",
    payload: platform
  }
}


const receivePrices = (platforms) =>{
	return {
		type: 'UPDATE_PRICE',
	  payload: platforms
	}
}

const updatePricePlatform = (platform) => {
      return{
        type: "PLATFORM_SELECTED",
        payload: platform
      }

}


export const updatePlatforms = (platforms, current_platform) =>{
  return dispatch => {
    dispatch(receivePrices(platforms))
    if (current_platform && current_platform.name)
      {
        platforms.forEach(
          (platform) => {

            if (platform.name === current_platform.name){
              console.log(platform)
              dispatch(updatePricePlatform(platform))
            }
          }
        )
      }
  }
}




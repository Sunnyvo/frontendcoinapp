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
  // const data =data
  return dispatch => {
    // var data = JSON.parse(platforms)
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




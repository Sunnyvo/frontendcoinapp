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


export const updatePlatforms = (data, current_platform) =>{
  const platforms =data.platforms.platforms
  return dispatch => {
    // var data = JSON.parse(platforms)
    dispatch(receivePrices(data))
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




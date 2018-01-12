export const  selectPlatform = (platform) => {
  console.log ("hey boy u click on me:", platform.name);
  return {
    type: "PLATFORM_SELECTED",
    payload: platform
  }
}


const receivePrices = (platforms) =>{
  console.log('we will update prices!')
	return {
		type: 'UPDATE_PRICE',
	  platforms
	}
}

export const updatePlatforms = (platforms) =>{
  console.log('why cant')
  return dispatch => {
    console.log('please')
    var data = JSON.parse(platforms)
  	dispatch(receivePrices(data))
  }
}




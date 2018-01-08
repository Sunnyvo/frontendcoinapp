export const  selectPlatform = (platform) => {
  console.log ("hey boy u click on me:", platform.name);
  return {
    type: "PLATFORM_SELECTED",
    payload: platform
  }
}
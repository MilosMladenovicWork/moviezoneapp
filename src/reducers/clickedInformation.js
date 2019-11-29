const clickedInformation = (state = false, action) => {
  if(action.type === 'CLICK_INFORMATION'){
    return !state
  }else{
    return state 
  }
}

export default clickedInformation
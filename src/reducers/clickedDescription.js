const clickedDescription = (state = false , action) => {
  if(action.type === 'CLICK_DESCRIPTION'){
    return !state
  }else{
    return state
  }
}

export default clickedDescription
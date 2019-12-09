const clickedSearch = (state=true, action) => {
  if(action.type === 'TOGGLE_CLICKED_SEARCH'){
    return !state;
  }
  else{
    return state
  }
}

export default clickedSearch
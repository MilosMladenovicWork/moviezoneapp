const relNum = (state=1, action) => {
  if(action.type === 'NEXT_PAGE'){
    return state + 1
  }
  else{
    return state
  }
}

export default relNum
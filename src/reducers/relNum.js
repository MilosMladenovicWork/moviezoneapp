const relNum = (state=1, action) => {
  if(action.type === 'NEXT_PAGE'){
    return state + 1
  }else if(action.type === 'RELEASE_NUM_RESET'){
    return 1
  }
  else{
    return state
  }
}

export default relNum
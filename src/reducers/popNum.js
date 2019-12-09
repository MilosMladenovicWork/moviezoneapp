const popNum = (state=1, action) => {
  if(action.type === 'NEXT_PAGE_POPULAR'){
    return state + 1
  }else if(action.type === 'POPULAR_NUM_RESET'){
    return 1
  }
  else{
    return state
  }
}

export default popNum
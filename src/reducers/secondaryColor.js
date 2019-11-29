const secondaryColor = (state = '#000', action) => {
  if(action.type === 'NEW_VALUE'){
    return action.payload.color;
  }else{
    return state;
  }
}

export default secondaryColor;
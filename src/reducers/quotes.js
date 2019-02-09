

export default function quotes(state=[], action){
  let idx
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      idx = state.indexOf(action.quoteId)
      return [...state.slice(0,idx),...state.slice(idx+1)]
    default:
      return state
  }
}

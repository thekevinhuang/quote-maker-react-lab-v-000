

export default function quotes(state=[], action){
  let idx
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    default:
      return state
  }
}

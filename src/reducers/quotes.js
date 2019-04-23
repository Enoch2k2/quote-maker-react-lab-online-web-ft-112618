export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

     case "REMOVE_QUOTE":
        return state.filter(quote => quote.id !== action.quoteId) 
      
      case "UPVOTE_QUOTE":
        // let quote = state.find(quoteObj => quoteObj.id === action.quoteId)
        // let idx = state.indexOf(quote)
        // return [...state.slice(0, idx), { ...quote, votes: quote.votes + 1}, ...state.slice(idx + 1)]
        return state.map(quote => {
          return quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote;
        })
      case "DOWNVOTE_QUOTE":
        // let quote = state.find(quoteObj => quoteObj.id === action.quoteId)
        // let idx = state.indexOf(quote)
        // return [...state.slice(0, idx), { ...quote, votes: quote.votes + 1}, ...state.slice(idx + 1)]
        return state.map(quote => {
          return quote.id === action.quoteId ? {...quote, votes: quote.votes > 0 ? ( quote.votes - 1) : (0)} : quote;
        })
      
     default:
      return state 
  }
}

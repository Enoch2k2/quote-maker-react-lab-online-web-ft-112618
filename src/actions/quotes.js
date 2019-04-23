

// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = (quoteId) => ({ type: "REMOVE_QUOTE", quoteId })

export const upvoteQuote = (quoteId) => ({ type: "UPVOTE_QUOTE", quoteId })

export const downvoteQuote = (quoteId) => ({ type: "DOWNVOTE_QUOTE", quoteId })
const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const anecdoteToChange = state.find((a) => a.id === id);
      const updatedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : updatedAnecdote));
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

const voteFor = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes,
  };
};

const createAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: anecdote,
  };
};

export { voteFor, createAnecdote, initializeAnecdotes };
export default anecdoteReducer;
